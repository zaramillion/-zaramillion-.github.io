# Tayong Fritz Vugah - Personal Portfolio

This is my personal portfolio website showcasing my skills, projects, and contact information.

## Website Structure

The portfolio consists of four main pages:

1. **About Me** (index.html) - Overview of my skills and expertise
2. **My Story** (my-story.html) - My journey and background in software engineering
3. **Featured Projects** (projects.html) - Showcase of my key projects
4. **Contact Me** (contact.html) - Contact form and additional contact information

## Contact Form Setup

The contact form is powered by a Node.js backend that sends emails to tayongfritz51@gmail.com when someone submits the form.

### Setting Up the Contact Form Server

1. **Navigate to the server directory:**
   ```
   cd "Personal Portfolio/server"
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure email settings:**
   - Open the `.env` file in the server directory
   - Update the following variables:
     - `EMAIL_USER`: Your Gmail address (or other email service)
     - `EMAIL_PASS`: Your app password (for Gmail) or regular password (for other services)
   
   For Gmail users:
   - You need to create an App Password in your Google Account
   - Go to your Google Account > Security > 2-Step Verification > App passwords
   - Select "Mail" and "Other" (Custom name: "Portfolio Contact Form")
   - Copy the generated password and paste it in the `.env` file

4. **Start the server:**
   ```
   npm start
   ```
   
   The server will run on port 3000 by default.

5. **Testing the contact form:**
   - Open the portfolio website in your browser
   - Navigate to the Contact Me page
   - Fill out the form and submit
   - You should see a success message if everything is working correctly
   - Check the email address (tayongfritz51@gmail.com) to confirm you received the submission

## Deployment

When deploying the website and server:

1. **Update CORS settings:**
   - In the `.env` file, update `ALLOWED_ORIGIN` to match your website's domain

2. **Set up environment variables:**
   - If using a hosting service, set up the environment variables in their dashboard instead of using the `.env` file

3. **Configure email service:**
   - Make sure your email service is properly configured for the production environment

## Technologies Used

- HTML5, CSS3, JavaScript
- Node.js, Express
- Nodemailer for email functionality
- Particle.js for the animated background
