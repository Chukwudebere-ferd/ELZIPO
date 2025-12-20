# Suggested Firestore rules for production 🔐

Use these rules to allow public reads of `projects` while restricting writes to an admin user only.

Replace `YOUR_ADMIN_UID` with the Firebase UID of the admin account you use to manage projects.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{projectId} {
      // Public read
      allow read: if true;

      // Only the admin UID (replace below) can create/update/delete
      allow write: if request.auth != null && request.auth.uid == "YOUR_ADMIN_UID";
    }
  }
}
```

You can deploy these from the Firebase Console (Firestore → Rules) or using the Firebase CLI.
