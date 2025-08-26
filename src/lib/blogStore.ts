export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string; // ISO
  image: string;
  tags?: string[];
  content?: string; // Full content for individual post pages
}

const STORAGE_KEY = "purrfect_blog_posts";

// Default demo posts
const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: "Welcome to Our Blog!",
    excerpt:
      "This is our very first post — we'll share company updates, tips, and behind‑the‑scenes stories.",
    author: "Admin",
    date: "2025-08-25T10:00:00.000Z",
    image: "/catHotel.jpg",
    tags: ["update", "hello"],
    content:
      "Welcome to the Purrfect Getaway blog! We're excited to share our journey with you through regular updates, helpful tips, and behind-the-scenes stories from our cat hotel. Stay tuned for more amazing content!",
  },
  {
    id: 2,
    title: "Why Cats Love Daycare",
    excerpt:
      "From soothing naps to enrichment toys — discover why your cat thrives in our day care routine.",
    author: "Jane Doe",
    date: "2025-08-24T14:30:00.000Z",
    image: "/catHotel.jpg",
    tags: ["cats", "daycare", "tips"],
    content:
      "Our daycare program is designed specifically with cats in mind. From cozy napping spots to interactive toys, we create an environment where your feline friends can thrive while you're away.",
  },
  {
    id: 3,
    title: "Cat Boarding: A Home Away From Home",
    excerpt:
      "Learn how our boarding services provide comfort and care for your feline friends during extended stays.",
    author: "Dr. Adrian Setiawan",
    date: "2025-08-23T09:15:00.000Z",
    image: "/catHotel.jpg",
    tags: ["boarding", "care", "tips"],
    content:
      "When you need to travel, our boarding facilities ensure your cat feels at home. With spacious rooms, personal attention, and familiar routines, we make extended stays comfortable and stress-free.",
  },
  {
    id: 4,
    title: "The Joy of Cat Playtime",
    excerpt:
      "Discover the importance of play in your cat's daily routine and how we make every moment fun.",
    author: "Lina Pratama",
    date: "2025-08-22T16:45:00.000Z",
    image: "/catHotel.jpg",
    tags: ["play", "enrichment", "fun"],
    content:
      "Play is essential for your cat's physical and mental health. Our enrichment programs include interactive toys, climbing structures, and supervised play sessions to keep your cat happy and engaged.",
  },
];

class BlogStore {
  private static instance: BlogStore;
  private posts: BlogPost[] = [];
  private listeners: (() => void)[] = [];

  private constructor() {
    this.loadPosts();
  }

  static getInstance(): BlogStore {
    if (!BlogStore.instance) {
      BlogStore.instance = new BlogStore();
    }
    return BlogStore.instance;
  }

  private loadPosts(): void {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        this.posts = JSON.parse(stored);
      } else {
        // Initialize with default posts
        this.posts = [...defaultPosts];
        this.savePosts();
      }
    } catch (error) {
      console.error("Error loading posts from localStorage:", error);
      this.posts = [...defaultPosts];
    }
  }

  private savePosts(): void {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.posts));
      this.notifyListeners();
    } catch (error) {
      console.error("Error saving posts to localStorage:", error);
    }
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  getAllPosts(): BlogPost[] {
    return [...this.posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  getPostById(id: number): BlogPost | undefined {
    return this.posts.find((post) => post.id === id);
  }

  addPost(newPost: Omit<BlogPost, "id">): BlogPost {
    const id = Math.max(...this.posts.map((p) => p.id), 0) + 1;
    const post: BlogPost = {
      ...newPost,
      id,
      date: new Date().toISOString(),
    };

    this.posts.push(post);
    this.savePosts();
    return post;
  }

  updatePost(id: number, updatedPost: Partial<BlogPost>): boolean {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) return false;

    this.posts[index] = { ...this.posts[index], ...updatedPost };
    this.savePosts();
    return true;
  }

  deletePost(id: number): boolean {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) return false;

    this.posts.splice(index, 1);
    this.savePosts();
    return true;
  }

  // Generate excerpt from content if not provided
  generateExcerpt(content: string, maxLength: number = 150): string {
    if (content.length <= maxLength) return content;

    const trimmed = content.substring(0, maxLength);
    const lastSpace = trimmed.lastIndexOf(" ");

    if (lastSpace > 0) {
      return trimmed.substring(0, lastSpace) + "...";
    }

    return trimmed + "...";
  }
}

export const blogStore = BlogStore.getInstance();
