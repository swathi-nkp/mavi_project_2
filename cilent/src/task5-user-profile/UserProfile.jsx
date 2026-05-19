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
      <div className="absolute top-4 right-6 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
        <span className="text-sm text-gray-500">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="absolute top-4 right-6 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-red-100">
        <span className="text-sm text-red-500">Failed to load profile</span>
      </div>
    );
  }

  return (
    <div className="absolute top-4 right-6 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
      <img
        src={profile?.avatar_url || 'https://ui-avatars.com/api/?name=User&background=random'}
        alt={profile?.full_name || 'User'}
        className="w-8 h-8 rounded-full object-cover border border-gray-200"
      />
      <span className="text-sm font-medium text-gray-700">
        {profile?.full_name || 'Unknown User'}
      </span>
    </div>
  );
};

export default UserProfile;
