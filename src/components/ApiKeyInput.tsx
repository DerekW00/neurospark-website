import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Lock, Check, KeyRound, Info } from "lucide-react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ApiKeyInputProps {
    onKeysSubmitted?: (keys: {
        openai?: { key: string; model: string };
        anthropic?: { key: string; model: string };
        perplexity?: { key: string; model: string };
    }) => void;
}

// Model options with cost estimates
const MODEL_OPTIONS = {
    openai: [
        { value: "gpt-3.5-turbo", label: "GPT-3.5 Turbo", cost: "Cheapest ($0.0005/1K tokens)", isRecommended: true },
        { value: "gpt-4o", label: "GPT-4o", cost: "Balanced ($0.005/1K tokens)", isRecommended: false },
        { value: "gpt-4o-mini", label: "GPT-4o Mini", cost: "Affordable ($0.001/1K tokens)", isRecommended: false },
        { value: "gpt-4-turbo", label: "GPT-4 Turbo", cost: "Expensive ($0.01/1K tokens)", isRecommended: false },
    ],
    anthropic: [
        { value: "claude-3-haiku-20240307", label: "Claude 3 Haiku", cost: "Cheapest ($0.00025/1K tokens)", isRecommended: true },
        { value: "claude-3-sonnet-20240229", label: "Claude 3 Sonnet", cost: "Balanced ($0.003/1K tokens)", isRecommended: false },
        { value: "claude-3-opus-20240229", label: "Claude 3 Opus", cost: "Expensive ($0.015/1K tokens)", isRecommended: false },
    ],
    perplexity: [
        { value: "llama-3-8b-online", label: "Llama 3 8B", cost: "Cheapest ($0.0003/1K tokens)", isRecommended: true },
        { value: "llama-3-70b-online", label: "Llama 3 70B", cost: "Balanced ($0.0009/1K tokens)", isRecommended: false },
        { value: "sonar-small-online", label: "Sonar Small", cost: "Affordable ($0.0006/1K tokens)", isRecommended: false },
    ],
};

// Get the recommended model for a provider
const getRecommendedModel = (provider: string): string => {
    const recommended = MODEL_OPTIONS[provider]?.find(model => model.isRecommended);
    return recommended ? recommended.value : MODEL_OPTIONS[provider]?.[0]?.value || "";
};

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onKeysSubmitted }) => {
    const [openaiKey, setOpenaiKey] = useLocalStorage<string>("neurospark-openai-key", "");
    const [anthropicKey, setAnthropicKey] = useLocalStorage<string>("neurospark-anthropic-key", "");
    const [perplexityKey, setPerplexityKey] = useLocalStorage<string>("neurospark-perplexity-key", "");

    const [openaiModel, setOpenaiModel] = useLocalStorage<string>("neurospark-openai-model", getRecommendedModel("openai"));
    const [anthropicModel, setAnthropicModel] = useLocalStorage<string>("neurospark-anthropic-model", getRecommendedModel("anthropic"));
    const [perplexityModel, setPerplexityModel] = useLocalStorage<string>("neurospark-perplexity-model", getRecommendedModel("perplexity"));

    const [keysSubmitted, setKeysSubmitted] = useState(false);
    const [activeProvider, setActiveProvider] = useLocalStorage<string>("neurospark-active-provider", "openai");

    useEffect(() => {
        // Check if we already have at least one key
        if (openaiKey || anthropicKey || perplexityKey) {
            setKeysSubmitted(true);
            if (onKeysSubmitted) {
                onKeysSubmitted({
                    openai: openaiKey ? { key: openaiKey, model: openaiModel } : undefined,
                    anthropic: anthropicKey ? { key: anthropicKey, model: anthropicModel } : undefined,
                    perplexity: perplexityKey ? { key: perplexityKey, model: perplexityModel } : undefined,
                });
            }

            // Set the active provider based on which key is available
            if (openaiKey && activeProvider === "openai") {
                // Keep existing selection
            } else if (anthropicKey && activeProvider === "anthropic") {
                // Keep existing selection
            } else if (perplexityKey && activeProvider === "perplexity") {
                // Keep existing selection
            } else if (openaiKey) {
                setActiveProvider("openai");
            } else if (anthropicKey) {
                setActiveProvider("anthropic");
            } else if (perplexityKey) {
                setActiveProvider("perplexity");
            }
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setKeysSubmitted(true);
        if (onKeysSubmitted) {
            onKeysSubmitted({
                openai: openaiKey ? { key: openaiKey, model: openaiModel } : undefined,
                anthropic: anthropicKey ? { key: anthropicKey, model: anthropicModel } : undefined,
                perplexity: perplexityKey ? { key: perplexityKey, model: perplexityModel } : undefined,
            });
        }
    };

    const handleReset = () => {
        setKeysSubmitted(false);
    };

    const handleProviderSelect = (provider: string) => {
        setActiveProvider(provider);
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <KeyRound className="h-5 w-5" />
                    API Key Settings
                </CardTitle>
                <CardDescription>
                    {keysSubmitted
                        ? "Your API keys are securely stored in your browser's local storage."
                        : "Enter your API key to use the interactive demo. Your key will only be stored locally in your browser."}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {keysSubmitted ? (
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium">OpenAI</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {openaiKey ? (
                                            <span>Using {MODEL_OPTIONS.openai.find(m => m.value === openaiModel)?.label || openaiModel}</span>
                                        ) : (
                                            "No key provided"
                                        )}
                                    </p>
                                </div>
                                <div>
                                    {openaiKey && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleProviderSelect("openai")}
                                            className={activeProvider === "openai" ? "bg-primary/20" : ""}
                                        >
                                            {activeProvider === "openai" && <Check className="h-4 w-4 mr-2" />}
                                            Use
                                        </Button>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium">Anthropic</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {anthropicKey ? (
                                            <span>Using {MODEL_OPTIONS.anthropic.find(m => m.value === anthropicModel)?.label || anthropicModel}</span>
                                        ) : (
                                            "No key provided"
                                        )}
                                    </p>
                                </div>
                                <div>
                                    {anthropicKey && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleProviderSelect("anthropic")}
                                            className={activeProvider === "anthropic" ? "bg-primary/20" : ""}
                                        >
                                            {activeProvider === "anthropic" && <Check className="h-4 w-4 mr-2" />}
                                            Use
                                        </Button>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium">Perplexity</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {perplexityKey ? (
                                            <span>Using {MODEL_OPTIONS.perplexity.find(m => m.value === perplexityModel)?.label || perplexityModel}</span>
                                        ) : (
                                            "No key provided"
                                        )}
                                    </p>
                                </div>
                                <div>
                                    {perplexityKey && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleProviderSelect("perplexity")}
                                            className={activeProvider === "perplexity" ? "bg-primary/20" : ""}
                                        >
                                            {activeProvider === "perplexity" && <Check className="h-4 w-4 mr-2" />}
                                            Use
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <h3 className="font-medium mb-2">Cost Comparison</h3>
                            <div className="text-sm text-muted-foreground space-y-1">
                                <p>• OpenAI: Best general performance across various tasks</p>
                                <p>• Anthropic: Strong for complex reasoning and safety</p>
                                <p>• Perplexity: Most cost-effective for simple tasks</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-3">
                            <Label htmlFor="openai-key" className="flex items-center">
                                OpenAI API Key
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="ml-1">
                                            <Info className="h-4 w-4 text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="w-[200px]">OpenAI generally provides the best overall performance for task breakdown</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Label>
                            <div className="relative">
                                <Input
                                    id="openai-key"
                                    type="password"
                                    placeholder="sk-..."
                                    value={openaiKey}
                                    onChange={(e) => setOpenaiKey(e.target.value)}
                                />
                                <Lock className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            </div>
                            {openaiKey && (
                                <div className="pl-1">
                                    <Label htmlFor="openai-model" className="text-sm mb-1 block">Model</Label>
                                    <Select value={openaiModel} onValueChange={setOpenaiModel}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select model" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {MODEL_OPTIONS.openai.map(model => (
                                                <SelectItem key={model.value} value={model.value}>
                                                    <div className="flex flex-col">
                                                        <span>{model.label} {model.isRecommended && "✓"}</span>
                                                        <span className="text-xs text-muted-foreground">{model.cost}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="anthropic-key" className="flex items-center">
                                Anthropic API Key (Optional)
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="ml-1">
                                            <Info className="h-4 w-4 text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="w-[200px]">Anthropic's Claude models excel at thoughtful reasoning and safety</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Label>
                            <div className="relative">
                                <Input
                                    id="anthropic-key"
                                    type="password"
                                    placeholder="sk-ant-..."
                                    value={anthropicKey}
                                    onChange={(e) => setAnthropicKey(e.target.value)}
                                />
                                <Lock className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            </div>
                            {anthropicKey && (
                                <div className="pl-1">
                                    <Label htmlFor="anthropic-model" className="text-sm mb-1 block">Model</Label>
                                    <Select value={anthropicModel} onValueChange={setAnthropicModel}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select model" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {MODEL_OPTIONS.anthropic.map(model => (
                                                <SelectItem key={model.value} value={model.value}>
                                                    <div className="flex flex-col">
                                                        <span>{model.label} {model.isRecommended && "✓"}</span>
                                                        <span className="text-xs text-muted-foreground">{model.cost}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="perplexity-key" className="flex items-center">
                                Perplexity API Key (Optional)
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="ml-1">
                                            <Info className="h-4 w-4 text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="w-[200px]">Perplexity offers the most cost-effective models with good performance</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Label>
                            <div className="relative">
                                <Input
                                    id="perplexity-key"
                                    type="password"
                                    placeholder="pplx-..."
                                    value={perplexityKey}
                                    onChange={(e) => setPerplexityKey(e.target.value)}
                                />
                                <Lock className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            </div>
                            {perplexityKey && (
                                <div className="pl-1">
                                    <Label htmlFor="perplexity-model" className="text-sm mb-1 block">Model</Label>
                                    <Select value={perplexityModel} onValueChange={setPerplexityModel}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select model" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {MODEL_OPTIONS.perplexity.map(model => (
                                                <SelectItem key={model.value} value={model.value}>
                                                    <div className="flex flex-col">
                                                        <span>{model.label} {model.isRecommended && "✓"}</span>
                                                        <span className="text-xs text-muted-foreground">{model.cost}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}
                        </div>
                    </form>
                )}
            </CardContent>
            <CardFooter className="flex justify-between">
                {keysSubmitted ? (
                    <Button variant="outline" onClick={handleReset}>
                        Change API Keys
                    </Button>
                ) : (
                    <>
                        <p className="text-xs text-muted-foreground italic flex-1">
                            Your keys are never sent to our servers and are only stored in your browser's local storage.
                        </p>
                        <Button type="submit" onClick={handleSubmit}>
                            Save Keys
                        </Button>
                    </>
                )}
            </CardFooter>
        </Card>
    );
};

export default ApiKeyInput; 