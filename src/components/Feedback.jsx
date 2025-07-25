const Feedback = ({ feedback }) => {
  if (!feedback) return null;

  return (
    <div className={`p-4 rounded-lg mb-6 border ${
      feedback.type === 'success' 
        ? 'bg-gradient-to-r from-green-900 to-green-800 border-green-600' 
        : feedback.type === 'loading'
        ? 'bg-gradient-to-r from-blue-900 to-blue-800 border-blue-600'
        : 'bg-gradient-to-r from-red-900 to-red-800 border-red-600'
    }`}>
      <p className={`font-medium mb-2 ${
        feedback.type === 'success' 
          ? 'text-green-200' 
          : feedback.type === 'loading'
          ? 'text-blue-200'
          : 'text-red-200'
      }`}>
        {feedback.message}
      </p>
      
      {feedback.explanation && (
        <div className="mb-2">
          <p className="text-sm text-purple-200">{feedback.explanation}</p>
        </div>
      )}
      
      {feedback.output && (
        <div className="mb-2">
          <p className="text-sm text-purple-300 mb-1">Your output:</p>
          <pre className="bg-black p-2 rounded text-sm font-mono whitespace-pre-wrap text-purple-300 border border-purple-600">{feedback.output}</pre>
        </div>
      )}
      
      {feedback.expected && (
        <div className="mb-2">
          <p className="text-sm text-purple-300 mb-1">Expected output:</p>
          <pre className="bg-black p-2 rounded text-sm font-mono text-purple-300 border border-purple-600">{feedback.expected}</pre>
        </div>
      )}
      
      {feedback.hint && feedback.type === 'error' && (
        <div className="mt-3 p-3 bg-gradient-to-r from-blue-900 to-blue-800 rounded border border-blue-600">
          <p className="text-sm text-blue-200"><strong>Tip:</strong> {feedback.hint}</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;