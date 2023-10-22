import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        {/* Organization logo */}
        <Image
          source={item.img_url}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      {/* Organization name */}
      <Text style={styles.companyName} numberOfLines={1}>
        {item.name}
      </Text>

      {/* Active volunteer opportunities */}
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.active_opportunity.title}
        </Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
