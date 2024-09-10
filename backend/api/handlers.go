package api

import (
    "encoding/json"
    "net/http"

    "github.com/gorilla/mux"
    "task-management-system/backend/db"
)

func GetTasks(w http.ResponseWriter, r *http.Request) {
    var tasks []Task
    db.DB.Find(&tasks)
    json.NewEncoder(w).Encode(tasks)
}

func CreateTask(w http.ResponseWriter, r *http.Request) {
    var task Task
    json.NewDecoder(r.Body).Decode(&task)
    db.DB.Create(&task)
    json.NewEncoder(w).Encode(task)
}

func Routes(router *mux.Router) {
    router.HandleFunc("/tasks", GetTasks).Methods("GET")
    router.HandleFunc("/tasks", CreateTask).Methods("POST")
}
