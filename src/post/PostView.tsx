import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostType, SlicePostType, fetchPosts } from "./postSlice";
import { AsyncThunkAction } from "@reduxjs/toolkit";

export default function PostView() {
  type SelectorType = {
    post: SlicePostType;
  };

  const user = useSelector((state) => {
    return state;
  }) as SelectorType;

  const posts = [...user.post.posts];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {posts &&
            posts.map((post) => {
              return itemPostDesign(post);
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  button: {
    marginTop: 10,
    marginBottom: 10,
  },

  postItem: {
    alignSelf: "stretch",
    padding: 10,
    backgroundColor: "#4ff",
    marginTop: 4,
    borderRadius: 15,
  },

  title: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
  },
});

function itemPostDesign(post: PostType) {
  return (
    <View style={styles.postItem}>
      <Text style={styles.title}>{post.title} </Text>
      <Text>{post.body} </Text>
    </View>
  );
}
