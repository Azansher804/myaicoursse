import numpy as np

id , brokered , status , price , bed = np.genfromtxt('Numpy-practice/RealEstate-USA.csv' , delimiter=';', usecols=(0,1,2,3), unpack=True, dtype=None,skip_header=1)

print(brokered)
print(status)
print(price)
print(bed)

#statistic-operations

print("RealEstate price mean: ", np.mean(price))
print("RealEstate Price average: " , np.average(price))
print("RealEstate Price std: " , np.std(price))
print("RealEstate Price mod: " , np.median(price))
print("RealEstate Price percentile - 25: " , np.percentile(price,25))
print("RealEstate Price percentile  - 75: " , np.percentile(price,75))
print("RealEstate Price percentile  - 3: " , np.percentile(price,3))
print("RealEstate Price min : " , np.min(price))
print("RealEstate Price max : " , np.max(price))

#math operation 
print("RealEstate Price square: " , np.square(price))
print("RealEstate price sqrt: " , np.sqrt(price))
print("RealEstate price pwr: " , np.power(price))


# create a numpy array
data_array = np.array(data)
print(data_array)

# check the shape of the array
print(data_array.shape)

# check the data type of the array
print(data_array.dtype)

# check for missing values
print(np.isnan(data_array).sum())

#check mean of each column
print(np.nanmean(data_array, axis=0))

# check the standard deviation of each column
print(np.nanstd(data_array, axis=0))

# check the median of each column
print(np.nanmedian(data_array, axis=0))

# check the 25th percentile of each column
print(np.nanpercentile(data_array, 25, axis=0))

# check the 75th percentile of each column
print(np.nanpercentile(data_array, 75, axis=0))

#find the maximum value of each column
print(np.nanmax(data_array, axis=0))

# find the minimum value of each column
print(np.nanmin(data_array, axis=0))

# find the range of each column
print(np.nanmax(data_array, axis=0) - np.nanmin(data_array, axis=0))

# find the interquartile range of each column
print(np.nanpercentile(data_array, 75, axis=0) - np.nanpercentile(data_array, 25, axis=0))
# find the skewness of each column
print(np.nanmean(data_array, axis=0) - np.nanmedian(data_array, axis=0))

# find the kurtosis of each column
print(np.nanmean((data_array - np.nanmean(data_array, axis=0))*4, axis=0) / np.nanstd(data_array, axis=0)*4 - 3)
# check the 95th percentile of each column
print(np.nanpercentile(data_array, 95, axis=0))
# check the 99th percentile of each column
print(np.nanpercentile(data_array, 99, axis=0))
# check the 100th percentile of each column
print(np.nanpercentile(data_array, 100, axis=0))
# check the unique values of each column
print([np.unique(data_array[:, i]) for i in range(data_array.shape[1])])
# check the number of unique values of each column
print([np.unique(data_array[:, i]).size for i in range(data_array.shape[1])])
# check the correlation between columns
print(np.corrcoef(data_array, rowvar=False))
# check the covariance between columns
print(np.cov(data_array, rowvar=False))
# check the 10th percentile of each column
print(np.nanpercentile(data_array, 10, axis=0))
# check the 25th percentile of each column
print(np.nanpercentile(data_array, 25, axis=0))
# check the 50th percentile of each column
print(np.nanpercentile(data_array, 50, axis=0))
# check the 75th percentile of each column
print(np.nanpercentile(data_array, 75, axis=0))

