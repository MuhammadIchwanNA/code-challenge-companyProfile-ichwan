"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser, isAuthed } from "@/lib/auth";
import { useBlogStore } from "@/hooks/useBlogStore";
import { blogStore } from "@/lib/blogStore";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function CreateBlog() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [imagePath, setImagePath] = useState("/catHotel.jpg");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (!isAuthed()) {
      router.replace("/login");
    }
  }, [router]);

  const user = getUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Generate excerpt from content (first 150 chars)
      const excerpt = content.slice(0, 150);
      // Parse tags
      const tagArray = tags.split(",").map((t) => t.trim()).filter(Boolean);

      // Create the new post
      const newPost = {
        title,
        excerpt,
        content,
        image: imagePath,
        tags: tagArray,
        author: user?.email || "Anonymous",
        date: new Date().toISOString(),
      };

      // Add to Backendless
      const Backendless = (await import('@/lib/backendless')).default;
      const createdPost = await Backendless.Data.of('BlogPosts').save(newPost);

      setSubmitStatus('success');
      // success message
      setTimeout(() => {
        const post = createdPost as typeof newPost & { objectId: string };
        router.push(`/blog/${post.objectId}`);
      }, 1500);

    } catch (error) {
      console.error('Error creating post:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <>
        <Navbar />
        <main className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Post Published!</h1>
            <p className="text-slate-600 mb-6">Your blog post has been successfully created and published.</p>
            <div className="animate-pulse text-orange-600 font-semibold">Redirecting to your post...</div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Create New Blog Post
            </h1>
            <p className="text-slate-600">
              Logged in as: <span className="font-semibold text-orange-600">{user?.email}</span>
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-8">
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-700 text-sm">Failed to create post. Please try again.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-2">
                  Post Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter an engaging title for your post"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* Image */}
              <div>
                <label htmlFor="image" className="block text-sm font-semibold text-slate-700 mb-2">
                  Featured Image
                </label>
                <input
                  type="text"
                  id="image"
                  placeholder="e.g., /catHotel.jpg"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                  value={imagePath}
                  onChange={(e) => setImagePath(e.target.value)}
                />
                <p className="text-xs text-slate-500 mt-2">
                  Use images from your <code className="bg-slate-100 px-1 rounded">/public</code> folder or external URLs
                </p>
              </div>

              {/* Tags */}
              <div>
                <label htmlFor="tags" className="block text-sm font-semibold text-slate-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  placeholder="e.g., cats, tips, daycare (comma separated)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
                <p className="text-xs text-slate-500 mt-2">
                  Add relevant tags separated by commas to help readers find your content
                </p>
              </div>

              {/* Content */}
              <div>
                <label htmlFor="content" className="block text-sm font-semibold text-slate-700 mb-2">
                  Post Content
                </label>
                <textarea
                  id="content"
                  placeholder="Write your blog content here. You can use plain text or Markdown formatting..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 h-64 resize-y"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
                <p className="text-xs text-slate-500 mt-2">
                  The first 150 characters will be used as the post excerpt
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="flex-1 py-3 px-6 text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors duration-200 font-semibold"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !title.trim() || !content.trim()}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-amber-600 focus:ring-4 focus:ring-orange-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Publishing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Publish Post
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
