import axios from "axios";
import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CreatePostTestPage = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const testCreatePost = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      //✅ ส่วนที่เป็นการเรียก API เพื่อสร้าง post
      const res = await axios.post(`${API_BASE_URL}/posts`, {
        title: "[TEST] Mastering Time Management: Techniques for Success",
        image:
          "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/g8qpepvgnz6gioylyhrz.jpg",
        category_id: 2,
        description:
          "[TEST POST] Learn effective time management strategies to help you stay organized, reduce stress, and achieve your goals.",
        content:
          "## [TEST POST] 1. The Importance of Time Management\\n\\nUnderstanding why managing your time effectively is crucial for personal and professional success.\\n\\n## [TEST POST] 2. Prioritization Techniques\\n\\nLearn how to prioritize tasks to focus on what matters most.\\n\\n## [TEST POST] 3. Using Tools to Organize\\n\\nDiscover apps and methods to keep your tasks and goals organized.\\n\\n## [TEST POST] 4. Setting Realistic Goals\\n\\nUnderstand the importance of setting achievable goals and breaking them down into manageable steps.\\n\\n## [TEST POST] 5. Balancing Work and Life\\n\\nTips for maintaining a healthy work-life balance to avoid burnout and stay productive.",
        status_id: 1,
      });

      setResult(res.data);
    } catch (err) {
      setError({
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-6">
      <h1 className="text-4xl font-bold mb-6">Create Post Test</h1>

      <div className="bg-slate-800 rounded-xl p-6 text-center shadow-lg mb-6 w-full max-w-2xl">
        <button
          className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={testCreatePost}
          disabled={loading}
        >
          {loading ? "Loading..." : "Create Post"}
        </button>

        {loading && (
          <div className="mt-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}

        {result && (
          <div className="mt-6 text-left">
            <h3 className="text-xl font-semibold mb-2">Result</h3>
            <pre className="bg-slate-700 p-4 rounded-lg overflow-auto text-sm">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}

        {error && (
          <div className="mt-6 text-left">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Error</h3>
            <pre className="bg-slate-700 p-4 rounded-lg overflow-auto text-sm">
              {JSON.stringify(error, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

CreatePostTestPage.displayName = "CreatePostTestPage";

export default CreatePostTestPage;