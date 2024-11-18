LgTeslap Serive Manger PAI update

# Projext structure

```
└── 📁src
    └── 📁app
        └── 📁api
            └── 📁auth
                └── 📁[...nextauth]
                    └── route.ts
                └── 📁register
                    └── route.ts
                └── 📁testUserRegister
                    └── route.ts
            └── 📁chat
                └── route.ts
            └── 📁list
                └── route.ts
            └── 📁services
            ├── users
        └── 📁chat
            └── page.tsx
        └── 📁dashboard
            └── page.tsx
        └── favicon.ico
        └── globals.css
        └── layout.tsx
        └── page.module.css
        └── page.tsx
        └── 📁register
            └── page.tsx
    └── 📁components
        └── Forms.tsx
        └── LoginFrom.tsx
        └── NavBar.tsx
        └── SideBar.tsx
        └── landing.tsx
    └── 📁context
        └── appContext.tsx
    └── firebase.json
    └── 📁libs
        └── connection.ts
    └── 📁schemas
        └── service.schema.ts
        └── user.schema.ts
    └── 📁utils
        └── auth.ts
        └── emailValidation.ts
        └── services.ts
```

## Docker building steps

To build the docker image use the command:

```
docker build -t LgTeslap-nextjs-dashboard .
```

Run the Docker Container

```
docker run -p 3001:3001 LgTeslap-nextjs-dashboard
```

If you have error, rebuild the image:

```
docker build --no-cache -t LgTeslap-nextjs-dashboard .
```

Run again the container:

```
docker run -p 3001:3001 LgTeslap-nextjs-dashboard
```
