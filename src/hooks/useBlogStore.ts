"use client";

import { useState, useEffect } from "react";
import { blogStore, BlogPost } from "@/lib/blogStore";

export function useBlogStore() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial load
    setPosts(blogStore.getAllPosts());
    setIsLoading(false);

    // Subscribe to changes
    const unsubscribe = blogStore.subscribe(() => {
      setPosts(blogStore.getAllPosts());
    });

    return unsubscribe;
  }, []);

  const addPost = (newPost: Omit<BlogPost, "id">) => {
    return blogStore.addPost(newPost);
  };

  const updatePost = (id: number, updatedPost: Partial<BlogPost>) => {
    return blogStore.updatePost(id, updatedPost);
  };

  const deletePost = (id: number) => {
    return blogStore.deletePost(id);
  };

  const getPostById = (id: number) => {
    return blogStore.getPostById(id);
  };

  return {
    posts,
    isLoading,
    addPost,
    updatePost,
    deletePost,
    getPostById,
  };
}
