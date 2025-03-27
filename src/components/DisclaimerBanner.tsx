import React from 'react';
import { AlertCircle } from 'lucide-react';

const DisclaimerBanner = () => {
    return (
        <div className="w-full bg-muted/70 py-3 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
                <AlertCircle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Note:</span> This is a conceptual demonstration website for NeuroSpark, not the final product.
                </p>
            </div>
        </div>
    );
};

export default DisclaimerBanner; 