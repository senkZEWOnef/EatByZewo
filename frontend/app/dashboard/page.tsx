"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [business, setBusiness] = useState<any>(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        console.log("Not logged in");
        return;
      }

      const { data, error } = await supabase
        .from("businesses")
        .select("*")
        .eq("email", user.email)
        .single();

      if (error) {
        console.error("Error fetching business:", error);
      } else {
        setBusiness(data);
      }
    };

    fetchBusiness();
  }, []);

  if (!business) return <p>Loading business info...</p>;

  return (
    <div className="p-4">
      <h1 className="mb-3">Welcome, {business.name}</h1>
      {business.logo_url && (
        <img src={business.logo_url} alt="Business Logo" width={100} />
      )}
      <p>
        <strong>Email:</strong> {business.email}
      </p>
      <p>
        <strong>Slug:</strong> {business.slug}
      </p>
    </div>
  );
}
