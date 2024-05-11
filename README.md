## Enhanced Authentication API

This Node.js backend API is designed to provide enhanced authentication functionalities, including the ability for users to set their profiles as public or private. Additionally, it offers features for admin users to view both public and private user profiles, while normal users are restricted to viewing only public profiles. The API utilizes Cloudinary and Multer for file uploads, Joi for validation, and provides proper error handling and security measures.

### Features

- **User Registration**: Users can register new accounts.
- **User Authentication**: Users can log in using email/password or via OAuth with services like Google, Facebook, Twitter, or GitHub.
- **User Profile Management**: Users can view and edit their profile details, including photo, name, bio, phone, email, and password.
- **Profile Privacy Settings**: Users can choose to set their profiles as public or private.
- **Admin Access**: Admin users can access both public and private user profiles.
- **Public Profile Listing**: Endpoints are available for listing public profiles and retrieving user profiles based on user roles.
- **File Uploads**: Utilizes Cloudinary and Multer for uploading user photos or image URLs.
- **Validation**: Proper validation is implemented using Joi.
- **Error Handling**: Comprehensive error handling is included to ensure smooth operation.
- **Security Measures**: Security measures are in place to safeguard private user details.
- **Documentation**: Swagger documentation is available for easy API exploration and testing.

### API Documentation

Swagger documentation is available to explore and test the API endpoints interactively. Follow these steps to access the Swagger documentation:

1. Start the server as mentioned in the previous section.
2. Open your web browser and navigate to `https://documenter.getpostman.com/view/21567688/2sA3JM8hRo`.
