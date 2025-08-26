"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { isAuthed, logout, getUser } from "@/lib/auth";
import { useBlogStore } from "@/hooks/useBlogStore";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = isAuthed();
    setIsAuthenticated(auth);
    if (auth) {
      setUser(getUser());
    }
    // Fetch posts from Backendless
    (async () => {
      try {
        const Backendless = (await import('@/lib/backendless')).default;
        const data = await Backendless.Data.of('BlogPosts').find();
        setPosts(data);
      } catch (err) {
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  // Get all unique tags from posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => {
      if (Array.isArray(post.tags)) {
        post.tags.forEach((tag: string) => tags.add(tag));
      }
    });
    return Array.from(tags);
  }, [posts]);

  // Filter posts based on active filter
  const filteredPosts = useMemo(() => {
    if (activeFilter === "all") {
      return posts;
    }
    return posts.filter((post) => post.tags?.includes(activeFilter));
  }, [activeFilter, posts]);

  const handleFilterClick = (tag: string) => {
    setActiveFilter(tag);
  };

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-yellow-200/20"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Our Blog
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mx-auto mt-4 mb-6"></div>
              <p className="max-w-3xl mx-auto text-xl text-slate-700">
                Stay updated with the latest news, tips, and stories from
                Purrfect Getaway. Discover expert advice for cat care and
                behind-the-scenes moments.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Latest Posts
                </h2>
                <p className="text-slate-600">
                  Discover insights and stories from our team
                </p>
              </div>
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <div className="text-sm text-slate-600">
                    Welcome, <span className="font-semibold text-orange-600">{user?.email}</span>
                  </div>
                  <Link
                    href="/blog/create"
                    className="inline-flex items-center px-4 py-2 text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    New Post
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center px-4 py-2 text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all duration-300 font-semibold"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H3" />
                    </svg>
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Link
                    href="/login"
                    className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Login to Post
                  </Link>
                  <span className="text-xs text-slate-500 mt-2">* Only customers can post a blog</span>
                </div>
              )}
            </div>

            {/* Filter Tags */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">
                Filter by Topic
              </h3>
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => handleFilterClick("all")}
                  className={`px-4 py-2 text-sm font-medium rounded-full border-2 transition-all duration-200 capitalize ${
                    activeFilter === "all"
                      ? "bg-orange-500 border-orange-500 text-white shadow-lg"
                      : "border-orange-200 text-slate-700 hover:bg-orange-50 hover:border-orange-300"
                  }`}
                >
                  #all
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleFilterClick(tag)}
                    className={`px-4 py-2 text-sm font-medium rounded-full border-2 transition-all duration-200 capitalize ${
                      activeFilter === tag
                        ? "bg-orange-500 border-orange-500 text-white shadow-lg"
                        : "border-orange-200 text-slate-700 hover:bg-orange-50 hover:border-orange-300"
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
              <div className="mt-3 text-sm text-slate-600">
                {activeFilter === "all" 
                  ? `Showing all ${posts.length} posts`
                  : `Showing ${filteredPosts.length} post${filteredPosts.length !== 1 ? 's' : ''} tagged with "${activeFilter}"`
                }
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {isLoading ? (
                // Loading skeleton
                Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-white rounded-2xl border-2 border-orange-100 shadow-lg overflow-hidden animate-pulse">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                      <div className="h-6 bg-gray-200 rounded mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="flex gap-2 mb-4">
                        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                        <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                      </div>
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>
                ))
              ) : (
                filteredPosts.map((post) => (
                  <Link href={`/blog/${post.objectId}`} key={post.objectId}>
                    <article className="group bg-white rounded-2xl border-2 border-orange-100 shadow-lg hover:shadow-2xl hover:border-orange-200 transition-all duration-300 overflow-hidden cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <div className="p-6">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                          {post.title}
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center text-xs text-slate-500 mb-4">
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            {post.author}
                          </div>
                          <span className="mx-2">•</span>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>

                        <div className="flex gap-2 flex-wrap mb-4">
                          {(Array.isArray(post.tags) ? post.tags : []).map((tag: string) => (
                            <span
                              key={tag}
                              className={`px-3 py-1 text-xs font-medium rounded-full ${
                                activeFilter === tag
                                  ? "bg-orange-200 text-orange-800 ring-2 ring-orange-300"
                                  : "bg-orange-100 text-orange-700"
                              }`}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="inline-flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors duration-200">
                          Read More
                          <svg
                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))
              )}
            </div>

            {filteredPosts.length === 0 && activeFilter !== "all" && (
              <div className="text-center py-12 col-span-full">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  No posts found
                </h3>
                <p className="text-slate-600 mb-4">
                  No blog posts match the "{activeFilter}" tag. Try selecting a different filter.
                </p>
                <button
                  onClick={() => handleFilterClick("all")}
                  className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
                >
                  Show All Posts
                </button>
              </div>
            )}

            {posts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  No posts yet
                </h3>
                <p className="text-slate-600 mb-4">
                  Blog posts will appear here soon!
                </p>
                <button
                  className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl transition-all duration-300 font-semibold cursor-not-allowed opacity-50"
                  disabled
                >
                  Create First Post (Coming Soon)
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
