// src/components/NavigationParamList.ts

export type MainStackParamList = {
    Home: {}
    // Add this 👇
    Details: {
      flickId: number
    }
  }