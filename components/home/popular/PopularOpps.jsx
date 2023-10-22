import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  // ActivityIndicator,
} from "react-native";

import styles from "./popularopps.style";
// import { COLORS } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const PopularOpps = () => {
  const router = useRouter();
  // <-- useFetch if fetching data from API -->
  // const { data, isLoading, error } = useFetch("search", {
  //   query: "React developer",
  //   num_pages: "1",
  // });

  const [selectedJob, setSelectedJob] = useState();

  const jsonData = require("../../../data/volunteer-opps.json");
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    // Header
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular opportunities</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      {/* Volunteer opportunity card */}
      <View style={styles.cardsContainer}>
        {/* Use `isLoading` logic below if fetching data from API */}
        {/* {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : ( */}

        <FlatList
          data={jsonData.organizations}
          renderItem={(
            { item } // Specifies how each list item looks like
          ) => (
            <PopularJobCard
              item={item}
              selectedJob={selectedJob}
              handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={(item) => item.id} // Extracts unique key, similar to React's `key`            contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
        {/* )} */}
      </View>
    </View>
  );
};

export default PopularOpps;
