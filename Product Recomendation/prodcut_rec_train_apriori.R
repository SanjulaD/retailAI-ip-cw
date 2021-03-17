# Product Recommendation using Apriori

# Data pre processing
install.packages('arules')
install.packages('RColorBrewer')
library(arules)
library(RColorBrewer)

dataset = read.csv('Market_Basket_Optimisation.csv', header = FALSE)

dataset = read.transactions('Market_Basket_Optimisation.csv', sep = ',', rm.duplicates = TRUE)

summary(dataset)
 
itemFrequencyPlot(dataset,topN = 10, col = brewer.pal(8,'Pastel2'), main='Relative Item Frequency Plot', type="relative", ylab="Item Frequency (Relative)", xlab = "Products")

# Saving Plot
dev.copy(png, './model/frequency_plot.png', width = 800, height = 600)
dev.off()

# Training Datasets
rules = apriori(data = dataset, parameter = list(support = 0.003, confidence = 0.4))

# Visualizing the dataset
viusal_list = inspect(sort(rules, by = 'lift')[1: 10])
write.csv(viusal_list, file = "./output/product_visualization.csv")