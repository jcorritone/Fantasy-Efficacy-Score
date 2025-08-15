# Fantasy Efficacy Score (FES) Function

calculate_fes = function(data) {
  data$baseline_contribution = data$points * data$start_percent
  data$baseline = sum(data$baseline_contribution) / sum(data$start_percent)
  data$fes = (data$points - data$baseline) * data$start_percent
  return(data)
}
