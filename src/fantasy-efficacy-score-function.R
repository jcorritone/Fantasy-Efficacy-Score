# Fantasy Efficacy Score (FES) Function, assuming a data table exists with columns player, points, start_percent

calculate_fes = function(data) {
  data$baseline_contribution = data$points * data$start_percent
  data$baseline = sum(data$baseline_contribution) / sum(data$start_percent)
  data$fes = (data$points - data$baseline) * data$start_percent
  return(data)
}
