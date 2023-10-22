import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

// Volunteer opportunity categories displayed after the search bar
const volunteerTypes = [
  "Animals",
  "Community",
  "Disaster Relief",
  "Education & Literacy",
  "Health & Medicine",
  "Homeless & Housing",
  "Hunger",
  "Immigrants & Refugees",
  "Seniors",
];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  
  // Keeps track of which volunteer category is selected
  const [activeVolunteerType, setActiveVolunteerType] = useState("");

  return (
    // Welcome Message
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Frank</Text>
        <Text style={styles.welcomeMessage}>
          Find the best volunteer opportunity
        </Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>

        {/* Search button */}
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* Shows volunteer opportunity categories */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={volunteerTypes} // volunteerTypes declared above
          // Specifies how each list item looks like
          renderItem={({ item }) => (
            // Makes list item a button
            <TouchableOpacity
              style={styles.tab(activeVolunteerType, item)}
              onPress={() => {
                setActiveVolunteerType(item);
                // When item is pressed/clicked, it opens the search page for that item
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeVolunteerType, item)}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item} // Extracts unique key, similar to React's `key`
          contentContainerStyle={styles.tabsContentContainer}
        />
      </View>
    </View>
  );
};

export default Welcome;
