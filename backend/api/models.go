package api

import "github.com/jinzhu/gorm"

type Task struct {
    gorm.Model
    Title    string `json:"title"`
    Status   string `json:"status"`
    Priority string `json:"priority"`
}
