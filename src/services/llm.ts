// LLM Service for handling interactions with various AI providers

// Define the supported LLM providers
export type LLMProvider = 'openai' | 'anthropic' | 'perplexity';

// Access API keys from environment variables
const API_KEYS = {
  openai: import.meta.env.VITE_OPENAI_API_KEY,
  anthropic: import.meta.env.VITE_ANTHROPIC_API_KEY,
  perplexity: import.meta.env.VITE_PERPLEXITY_API_KEY
};

// Default models (most cost-effective options)
const DEFAULT_MODELS = {
  openai: "gpt-3.5-turbo",
  anthropic: "claude-3-haiku-20240307",
  perplexity: "llama-3-8b-online"
};

// Common interface for all LLM requests
interface LLMRequestOptions {
  message: string;
  systemPrompt?: string;
  conversationHistory?: Array<{ role: string, content: string }>;
  maxTokens?: number;
  temperature?: number;
  model?: string;
}

// OpenAI API interface
const callOpenAI = async (options: LLMRequestOptions, apiKey?: string) => {
  const key = apiKey || API_KEYS.openai;
  if (!key) {
    throw new Error('OpenAI API key is not configured');
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify({
        model: options.model || DEFAULT_MODELS.openai,
        messages: [
          ...(options.systemPrompt ? [{ role: 'system', content: options.systemPrompt }] : []),
          ...(options.conversationHistory || []),
          { role: 'user', content: options.message }
        ],
        max_tokens: options.maxTokens || 1000,
        temperature: options.temperature || 0.7
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to get response from OpenAI');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw error;
  }
};

// Anthropic (Claude) API interface
const callAnthropic = async (options: LLMRequestOptions, apiKey?: string) => {
  const key = apiKey || API_KEYS.anthropic;
  if (!key) {
    throw new Error('Anthropic API key is not configured');
  }

  try {
    const messages = [
      ...(options.systemPrompt ? [{ role: 'system', content: options.systemPrompt }] : []),
      ...(options.conversationHistory || []),
      { role: 'user', content: options.message }
    ];

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: options.model || DEFAULT_MODELS.anthropic,
        messages: messages,
        max_tokens: options.maxTokens || 1000,
        temperature: options.temperature || 0.7
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to get response from Anthropic');
    }

    const data = await response.json();
    return data.content[0].text;
  } catch (error) {
    console.error('Anthropic API Error:', error);
    throw error;
  }
};

// Perplexity API interface
const callPerplexity = async (options: LLMRequestOptions, apiKey?: string) => {
  const key = apiKey || API_KEYS.perplexity;
  if (!key) {
    throw new Error('Perplexity API key is not configured');
  }

  try {
    const messages = [
      ...(options.systemPrompt ? [{ role: 'system', content: options.systemPrompt }] : []),
      ...(options.conversationHistory || []),
      { role: 'user', content: options.message }
    ];

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify({
        model: options.model || DEFAULT_MODELS.perplexity,
        messages: messages,
        max_tokens: options.maxTokens || 1000,
        temperature: options.temperature || 0.7
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to get response from Perplexity');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Perplexity API Error:', error);
    throw error;
  }
};

// Main function to call the selected LLM provider
export const callLLM = async (
  provider: LLMProvider,
  options: LLMRequestOptions,
  apiKey?: string,
  model?: string
): Promise<string> => {
  // Add the model to options if provided
  const optionsWithModel = model ? { ...options, model } : options;

  switch (provider) {
    case 'openai':
      return callOpenAI(optionsWithModel, apiKey);
    case 'anthropic':
      return callAnthropic(optionsWithModel, apiKey);
    case 'perplexity':
      return callPerplexity(optionsWithModel, apiKey);
    default:
      throw new Error(`Unsupported LLM provider: ${provider}`);
  }
};

// Function to break down a commitment into microtasks
export const breakdownCommitment = async (
  provider: LLMProvider,
  commitmentTitle: string,
  commitmentDescription: string,
  deadline: string | null,
  estimatedTime: string | null,
  apiKeyOrConfig?: string | { key: string; model: string }
): Promise<Array<{ title: string, duration: number }>> => {
  // Extract key and model from the config if it's an object
  let apiKey: string | undefined;
  let model: string | undefined;

  if (typeof apiKeyOrConfig === 'object' && apiKeyOrConfig !== null) {
    apiKey = apiKeyOrConfig.key;
    model = apiKeyOrConfig.model;
  } else if (typeof apiKeyOrConfig === 'string') {
    apiKey = apiKeyOrConfig;
  }

  const systemPrompt = `You are an AI assistant specialized in helping users with ADHD by breaking down larger tasks into manageable microtasks. 
  Each microtask should be specific, actionable, and take no more than 15-30 minutes to complete. 
  Format your response as a JSON array where each microtask has a 'title' (string) and 'duration' (number of minutes).`;

  const message = `Break down the following commitment into microtasks:
  Title: ${commitmentTitle}
  Description: ${commitmentDescription}
  ${deadline ? `Deadline: ${deadline}` : ''}
  ${estimatedTime ? `Estimated time: ${estimatedTime}` : ''}
  
  Return ONLY a valid JSON array of microtasks, each with a title and duration in minutes. No additional text.`;

  try {
    const response = await callLLM(provider, { message, systemPrompt }, apiKey, model);

    // Parse the JSON response to get the array of microtasks
    // We need to extract the JSON from the response as LLMs sometimes add extra text
    const jsonMatch = response.match(/\[.*\]/s);
    if (!jsonMatch) {
      throw new Error('Failed to parse microtasks from response');
    }

    const microtasks = JSON.parse(jsonMatch[0]);
    return microtasks;
  } catch (error) {
    console.error('Error breaking down commitment:', error);
    throw error;
  }
};

export default {
  callLLM,
  breakdownCommitment
};
