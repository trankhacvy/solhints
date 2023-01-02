export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      devhint_posts: {
        Row: {
          id: string
          created_at: string | null
          title: string | null
          description: string | null
          repo: string | null
          address: string | null
          tags: string[] | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          title?: string | null
          description?: string | null
          repo?: string | null
          address?: string | null
          tags?: string[] | null
        }
        Update: {
          id?: string
          created_at?: string | null
          title?: string | null
          description?: string | null
          repo?: string | null
          address?: string | null
          tags?: string[] | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
