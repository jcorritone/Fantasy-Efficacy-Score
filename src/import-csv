# Import CSV File (Replace "replace" with file name), Adjust Start Percent & Rostered Percent from a percent to a proportion

library(tidyverse)

data <- read_csv("replace.csv")
data <- data %>%
  mutate(
    start_percent = as.numeric(start_percent) / 100,
    pct_rostered = as.numeric(pct_rostered) / 100
  )
