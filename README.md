# Instagram Clone - Ionic Project

An Instagram clone built with Ionic and Angular, replicating the design and basic functionalities of Instagram to provide a foundation for developing a social media application.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Built With](#built-with)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- **Authentication Screens**: Login and registration screens.
- **Home Feed**: Displays stories and posts loaded from JSON files.
- **Photo Capture**: Take photos and add them as posts or stories.
- **Filters**: Menu to select filters for photos.
- **User Profile**: User profile screen displaying information and statistics.

### Example of Loading Data

The app uses HTTP requests to load data from local JSON files, simulating data fetching from a backend service.

```typescript
export class HomePage implements OnInit {
  stories: any[] = [];
  posts: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadStories();
    this.loadPosts();
  }

  loadStories() {
    this.http.get<any[]>('assets/data/stories.json').subscribe((data) => {
      this.stories = data;
    });
  }

  loadPosts() {
    this.http.get<any[]>('assets/data/posts.json').subscribe((data) => {
      this.posts = data;
    });
  }

  viewComments(postId: number) {
    console.log(\`Navigating to comments for post ID: \${postId}\`);
    this.router.navigate(['/tabs/comments', postId]);
  }
}
```

> **Note:** The JSON data files are located in the `assets/data` directory. They simulate backend data and are used for loading stories, posts, comments, and profile information within the app.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/instagram-clone.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd instagram-clone
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Running the App

To run the app in a development environment:

```bash
ionic serve
```

This command will start the app on a local development server and open it in your default web browser.

## Built With

- **Ionic Framework**: Version `8.0.0`
- **Angular**: Version `^18.0.0`
- **Node.js**: Version `v22.11.0`
- **NPM**: Version `10.9.1`

## Dependencies

Refer to `package.json` for the full list of dependencies and devDependencies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
