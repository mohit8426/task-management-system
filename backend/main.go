package main

import (
    "log"
    "net/http"
    "os"

    "github.com/gorilla/mux"
    "github.com/joho/godotenv"
    "task-management-system/backend/api"
    "task-management-system/backend/db"
)

func main() {
    godotenv.Load()
    db.Init()

    router := mux.NewRouter()
    api.Routes(router)

    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }

    log.Printf("Server running on port %s", port)
    log.Fatal(http.ListenAndServe(":"+port, router))
}
