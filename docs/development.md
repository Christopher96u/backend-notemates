# Quick development - every day use

1. Migrations
1.1 Create migrations after any change in any *.entity.ts file
This commands will just generate the file under migrations folder and
will add the register under migrations table in our db.
   ```bash
   npm run migration:generate -- src/database/migrations/Whatever
   ```

1.2 Run this migrations (modify the tables)
```bash
npm run migration:run
``` 