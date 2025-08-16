# Assuming a data table exists with columns player, position, points, start_percent

# Fantasy Efficacy Score (FES) Baseline Calculation

calculate_baseline = function(data) {
  baselines = data %>%
    group_by(position) %>%
    summarise(baseline = sum(points * start_percent, na.rm = TRUE) / sum(start_percent, na.rm = TRUE),
              .groups = "drop"
    )
  data %>%
    left_join(baselines, by = "position")
}

# Fantasy Efficacy Score (FES) Calculation

calculate_fes = function(data) {
  data = calculate_baseline(data)
  data$fes = (data$points - data$baseline) * data$start_percent
  return(data)
}
