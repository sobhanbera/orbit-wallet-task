A react native application containing a bottom tab navigator and 2 screens (Feed and Search) as per below mockups.

## Features

- App with Bottom Tab Bar Navigator
- Right now contains two screens (Feed and Search)
- Feed Screen contains a list of posts
- Search Screen contains a search bar, and a list of some suggestions

## Demo Images / Videos


https://github.com/sobhanbera/orbit-wallet-task/assets/50291544/491c329a-0fdb-46b4-8e94-243a69dc5334


<img src="https://github.com/sobhanbera/orbit-wallet-task/assets/50291544/bd2315b8-339b-4b34-ad25-68e4aa7dedd0" height="500" />
<img src="https://github.com/sobhanbera/orbit-wallet-task/assets/50291544/c23d4179-1419-4647-8cb4-b86a9d2f8c43" height="500" />
<img src="https://github.com/sobhanbera/orbit-wallet-task/assets/50291544/b3485eae-260d-42a6-ba46-d480025dd533" height="500" />
<img src="https://github.com/sobhanbera/orbit-wallet-task/assets/50291544/37c7b6fe-8f31-4176-ae94-6f72a8262853" height="500" />

## File Structure

```bash
src
├── MainApp.tsx                           # Main App file
├── assets                                # Contains all the assets
│   └── images
│       └── icons
│           ├── add-filled.png
│           ├── add-outline.png
│           ├── comments.png
│           ├── community-filled.png
│           ├── community-outline.png
│           ├── follow.png
│           ├── heart.png
│           ├── home-filled.png
│           ├── home-outline.png
│           ├── profile-filled.png
│           ├── profile-outline.png
│           ├── search-filled.png
│           ├── search-outline.png
│           ├── send.png
│           └── share.png
├── components                            # Contains all the components
│   ├── SearchDummyInput.tsx
│   ├── navigation
│   │   └── AppTabBar.tsx
│   └── resuables                         # reusable components
│       └── TouchableScalable.tsx
├── configs                               # configurations & constants
│   ├── colors.ts
│   └── constants.ts
├── data                                  # dummy data
│   ├── city.ts
│   └── people.ts
├── navigators                            # navigation related files
│   ├── CoreAppNavigator.tsx
│   └── core
│       ├── CommunityNavigator.tsx
│       ├── CreateNavigator.tsx
│       ├── HomeNavigator.tsx
│       ├── ProfileNavigator.tsx
│       └── SearchNavigator.tsx
└── screens                              # Contains all the screens
    ├── CommunityScreen.tsx
    ├── CreateContentScreen.tsx
    ├── HomeScreen.tsx
    ├── ProfileScreen.tsx
    ├── SearchScreen.tsx
    └── core
        ├── home
        │   └── ImageContent.tsx
        └── search
            ├── CityListRenderer.tsx
            ├── HashtagedCityRenderer.tsx
            └── PeopleListRenderer.tsx
```

## Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
