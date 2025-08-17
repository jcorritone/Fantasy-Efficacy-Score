# Import CSV File (Replace "replace" with file name), Select relevant columns & adjust start_percent from a 0-100 scale to a 0-1 scale.

library(tidyverse)

data = read_csv("replace.csv")

cleaned_data = data %>%
  select(player_name, team, position, points, start_percent)

cleaned_data = cleaned_data %>%
  mutate(start_percent = as.numeric(start_percent) / 100)
