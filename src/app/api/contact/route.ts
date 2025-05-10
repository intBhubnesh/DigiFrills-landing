import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Log the form data (this is just for development/testing)
    console.log('Contact form submission:', body);
    
    // In a real implementation, you would send an email here
    // For now, we're just returning a success response
    
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing form submission' },
      { status: 500 }
    );
  }
}
