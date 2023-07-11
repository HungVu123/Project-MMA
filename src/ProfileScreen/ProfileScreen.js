import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styles from "./style";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView style={styles.scrollview}>
          <View style={styles.header}>
            <View style={styles.containImageAva}>
              <Image
                source={require("../../assets/AvaProfile.png")}
                resizeMode="stretch"
                style={styles.imageAva}
              />
            </View>
            <View style={styles.containName}>
              <Text style={styles.name}>Maximus Gold</Text>
              <Text style={styles.nameMail}>@derlaxy</Text>
            </View>
          </View>
          <View style={styles.containProfile}>
            <View style={styles.containItem}>
              <View style={styles.containIcon}>
                <Image
                  source={require("../../assets/GenderIcon.png")}
                  resizeMode="stretch"
                  style={styles.iconItemHeight}
                />
              </View>
              <View style={styles.containHeaderItem}>
                <Text style={styles.headerItem}>Gender</Text>
              </View>
              <View style={styles.containContentItem}>
                <Text style={styles.contentItem}>Male</Text>
              </View>
              <TouchableOpacity style={styles.containIcon}>
                <Image
                  source={require("../../assets/UpdateIcon.png")}
                  resizeMode="stretch"
                  style={styles.iconUpdate}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.containItem}>
              <View style={styles.containIcon}>
                <Image
                  source={require("../../assets/BirthdayIcon.png")}
                  resizeMode="stretch"
                  style={styles.iconItemWidth}
                />
              </View>
              <View style={styles.containHeaderItem}>
                <Text style={styles.headerItem}>Birthday</Text>
              </View>
              <View style={styles.containContentItem}>
                <Text style={styles.contentItem}>12-12-2000</Text>
              </View>
              <TouchableOpacity style={styles.containIcon}>
                <Image
                  source={require("../../assets/UpdateIcon.png")}
                  resizeMode="stretch"
                  style={styles.iconUpdate}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.containItem}>
              <View style={styles.containIcon}>
                <Image
                  source={require("../../assets/MailIcon.png")}
                  resizeMode="stretch"
                  style={styles.iconItemWidth}
                />
              </View>
              <View style={styles.containHeaderItem}>
                <Text style={styles.headerItem}>Email</Text>
              </View>
              <View style={styles.containContentItem}>
                <Text style={styles.contentItem}>lamvanphai@gmail.com</Text>
              </View>
              <TouchableOpacity style={styles.containIcon}>
                <Image
                  source={require("../../assets/UpdateIcon.png")}
                  resizeMode="stretch"
                  style={styles.iconUpdate}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.containItem}>
              <View style={styles.containIcon}>
                <Image
                  source={require("../../assets/PhoneIcon.png")}
                  resizeMode="stretch"
                  style={styles.iconItemHeight}
                />
              </View>
              <View style={styles.containHeaderItem}>
                <Text style={styles.headerItem}>Phone Number</Text>
              </View>
              <View style={styles.containContentItem}>
                <Text style={styles.contentItem}>(307) 555-0133</Text>
              </View>
              <TouchableOpacity style={styles.containIcon}>
                <Image
                  source={require("../../assets/UpdateIcon.png")}
                  resizeMode="stretch"
                  style={styles.iconUpdate}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.containItem}>
              <View style={styles.containIcon}>
                <Image
                  source={require("../../assets/PasswordIcon.png")}
                  resizeMode="stretch"
                  style={styles.iconItemWidth}
                />
              </View>
              <View style={styles.containHeaderItem}>
                <Text style={styles.headerItem}>Change Password</Text>
              </View>
              <View style={styles.containContentItem}>
                <Text style={styles.contentItem}>***********</Text>
              </View>
              <TouchableOpacity style={styles.containIcon}>
                <Image
                  source={require("../../assets/UpdateIcon.png")}
                  resizeMode="stretch"
                  style={styles.iconUpdate}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
