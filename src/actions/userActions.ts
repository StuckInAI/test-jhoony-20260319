"use server";

import { initializeDatabase } from '@/data-source';
import { User } from '@/entity/User';

export async function getUsers() {
  try {
    const dataSource = await initializeDatabase();
    const userRepository = dataSource.getRepository(User);
    return await userRepository.find();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  
  if (!name || name.trim() === '') {
    return { error: 'Name is required' };
  }
  
  try {
    const dataSource = await initializeDatabase();
    const userRepository = dataSource.getRepository(User);
    
    const user = new User();
    user.name = name.trim();
    
    await userRepository.save(user);
    
    return { success: true };
  } catch (error) {
    console.error('Error creating user:', error);
    return { error: 'Failed to create user' };
  }
}