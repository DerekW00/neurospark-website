import React from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { useState } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';

const PrototypeBanner = () => {
    const [dismissed, setDismissed] = useLocalStorage<boolean>('prototype-banner-dismissed', false);

    if (dismissed) {
        return null;
    }

    return (
        <div className="w-full bg-amber-100 text-amber-900 px-4 py-2 relative">
            <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
                <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm font-medium">
                    <span className="font-bold">Prototype:</span> This is a demonstration website showcasing the concepts behind NeuroSpark. Not all features are fully functional.
                </p>
                <button
                    onClick={() => setDismissed(true)}
                    className="ml-2 p-1 rounded-full hover:bg-amber-200 transition-colors"
                    aria-label="Dismiss"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default PrototypeBanner; 