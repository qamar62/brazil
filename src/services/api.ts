const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface HeroData {
  image: string;
  heading: string;
  text: string;
}

export interface SiteSettings {
  site_name: string;
  logo: string;
  favicon: string;
  contact_email: string;
  phone_number: string;
  address: string;
  facebook_url: string;
  instagram_url: string;
  twitter_url: string;
  youtube_url: string;
  whatsapp_number: string;
  footer_text: string;
  copyright_text: string;
  meta_description: string;
  meta_keywords: string;
  google_analytics_id: string;
}

export async function getHeroData(): Promise<HeroData> {
  const response = await fetch(`${API_BASE_URL}/brazil/hero/`);
  const data = await response.json();
  return data[0]; // Assuming we want the first hero section
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const response = await fetch(`${API_BASE_URL}/brazil/settings/`);
  const data = await response.json();
  return data[0]; // We only have one settings object
}
