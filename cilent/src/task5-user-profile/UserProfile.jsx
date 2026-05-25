import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('profiles')
          .select('full_name, avatar_url')
          .single();

        if (error) throw error;
        setProfile(data);
      } catch (err) {
        console.error('Error fetching profile:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="absolute top-4 right-6 flex items-center gap-3 bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-2.5 rounded-full shadow-lg shadow-violet-200">
        <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
        <span className="text-sm font-medium text-white">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="absolute top-4 right-6 flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 px-5 py-2.5 rounded-full shadow-lg shadow-rose-200">
        <span className="text-sm font-medium text-white">⚠️ Failed to load profile</span>
      </div>
    );
  }

  return (
    <div className="absolute top-4 right-6 flex items-center gap-3 bg-gradient-to-r from-violet-500 to-indigo-600 px-4 py-2 rounded-full shadow-lg shadow-violet-300 hover:shadow-violet-400 transition-all duration-300 hover:scale-105 cursor-pointer">
      <img
        src={profile?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile?.full_name || 'User')}&background=7c3aed&color=fff`}
        alt={profile?.full_name || 'User'}
        className="w-8 h-8 rounded-full object-cover border-2 border-white/50"
      />
      <span className="text-sm font-semibold text-white tracking-wide">
        {profile?.full_name || 'Unknown User'}
      </span>
      <span className="w-2 h-2 bg-emerald-400 rounded-full ring-2 ring-white animate-pulse" />
    </div>
  );
};

export default UserProfile;
