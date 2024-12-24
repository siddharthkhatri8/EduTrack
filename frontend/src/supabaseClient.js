import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jqnfjksczqcyuleuaeay.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxbmZqa3NjenFjeXVsZXVhZWF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3NzE0MTYsImV4cCI6MjA1MDM0NzQxNn0.ewTq2Uq2AJXBIbj-cqgDkvJps4cNZ5QyQ2cA4XVVysA';

export const supabase = createClient(supabaseUrl, supabaseKey);
