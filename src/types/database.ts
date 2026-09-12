export type UserRole = "admin" | "editor" | "author" | "user";
export type ArticleType = "review" | "news" | "buying_guide" | "comparison";
export type PublishStatus = "draft" | "published";
export type CommentStatus = "pending" | "approved";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          avatar_url: string | null;
          role: UserRole;
          created_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: UserRole;
          created_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: UserRole;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          parent_id: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          parent_id?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          parent_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "categories_parent_id_fkey";
            columns: ["parent_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
        ];
      };
      brands: {
        Row: {
          id: string;
          name: string;
          slug: string;
          logo_url: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          logo_url?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          logo_url?: string | null;
        };
        Relationships: [];
      };
      products: {
        Row: {
          id: string;
          name: string;
          slug: string;
          brand_id: string;
          category_id: string;
          image_url: string | null;
          release_date: string | null;
          specs: Json;
          pros: string[];
          cons: string[];
          overall_rating: number | null;
          verdict: string | null;
          status: PublishStatus;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          brand_id: string;
          category_id: string;
          image_url?: string | null;
          release_date?: string | null;
          specs?: Json;
          pros?: string[];
          cons?: string[];
          overall_rating?: number | null;
          verdict?: string | null;
          status?: PublishStatus;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          brand_id?: string;
          category_id?: string;
          image_url?: string | null;
          release_date?: string | null;
          specs?: Json;
          pros?: string[];
          cons?: string[];
          overall_rating?: number | null;
          verdict?: string | null;
          status?: PublishStatus;
        };
        Relationships: [
          {
            foreignKeyName: "products_brand_id_fkey";
            columns: ["brand_id"];
            isOneToOne: false;
            referencedRelation: "brands";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
        ];
      };
      articles: {
        Row: {
          id: string;
          title: string;
          slug: string;
          article_type: ArticleType;
          excerpt: string | null;
          content: string;
          featured_image: string | null;
          author_id: string;
          product_id: string | null;
          category_id: string;
          views_count: number;
          published_at: string | null;
          status: PublishStatus;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          article_type: ArticleType;
          excerpt?: string | null;
          content?: string;
          featured_image?: string | null;
          author_id: string;
          product_id?: string | null;
          category_id: string;
          views_count?: number;
          published_at?: string | null;
          status?: PublishStatus;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          article_type?: ArticleType;
          excerpt?: string | null;
          content?: string;
          featured_image?: string | null;
          author_id?: string;
          product_id?: string | null;
          category_id?: string;
          views_count?: number;
          published_at?: string | null;
          status?: PublishStatus;
        };
        Relationships: [
          {
            foreignKeyName: "articles_author_id_fkey";
            columns: ["author_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "articles_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "articles_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
        ];
      };
      comments: {
        Row: {
          id: string;
          article_id: string;
          user_id: string;
          content: string;
          created_at: string;
          status: CommentStatus;
        };
        Insert: {
          id?: string;
          article_id: string;
          user_id: string;
          content: string;
          created_at?: string;
          status?: CommentStatus;
        };
        Update: {
          id?: string;
          article_id?: string;
          user_id?: string;
          content?: string;
          created_at?: string;
          status?: CommentStatus;
        };
        Relationships: [
          {
            foreignKeyName: "comments_article_id_fkey";
            columns: ["article_id"];
            isOneToOne: false;
            referencedRelation: "articles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "comments_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_staff: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      user_role: UserRole;
      article_type: ArticleType;
      publish_status: PublishStatus;
      comment_status: CommentStatus;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
export type InsertTables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];
export type UpdateTables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];
