import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

const Dashboard: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Welcome to LeadFlow CRM</Text>
      <Button
        title="Logout"
        onPress={() => {
          dispatch(logout());
          navigation.navigate("Login");
        }}
      />
    </View>
  );
};

export default Dashboard;
