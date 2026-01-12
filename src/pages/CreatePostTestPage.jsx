import axios from "axios";
import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CreatePostTestPage = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const testCreatePost = async () => {
    setResult(null);
    setError(null);

    try {
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
    }
  };

  return (
    <div className="p-5">
      <h1>Create Post Test</h1>
      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" onClick={testCreatePost}>Create Post</button>

      {result && (
        <>
          <h3>Result</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </>
      )}

      {error && (
        <>
          <h3>Error</h3>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

CreatePostTestPage.displayName = "CreatePostTestPage";

export default CreatePostTestPage;