import React, { useState } from 'react';
import { Code2, Copy, Check } from 'lucide-react';

interface CodeDisplayProps {
  code: string;
  title: string;
}

export const CodeDisplay: React.FC<CodeDisplayProps> = ({ code, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <button
          onClick={handleCopyCode}
          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy code</span>
            </>
          )}
        </button>
      </div>
      <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
        <code className="text-sm text-gray-800">{code}</code>
      </pre>
    </div>
  );
}; 