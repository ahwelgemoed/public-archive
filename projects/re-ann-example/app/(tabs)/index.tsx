import {
  StyleSheet,
  ScrollView,
  Pressable,
  View,
  useWindowDimensions,
} from "react-native";

import { Text } from "../../components/Themed";
import SearchInput from "../../components/SearchInut";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabOneScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          width: width - 40,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SearchInput />
        <Pressable
          onPress={() => router.push("/(tabs)/two")}
          style={{
            height: "100%",
            alignItems: "center",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: "#dedede",
          }}
        >
          <FontAwesome
            size={16}
            name="home"
            color={"blue"}
            style={{
              padding: 10,
            }}
          />
        </Pressable>
      </View>
      <Text
        style={{
          padding: 10,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        ipsa iusto nam exercitationem cum repellat inventore quam quaerat iste
        magnam atque quod natus voluptate tempora repudiandae, voluptas
        reiciendis maxime ratione, quae qui vel accusamus? Corrupti enim alias
        tempora repellat natus, ullam maxime aspernatur veritatis blanditiis et,
        dolor iusto ipsam ex, repudiandae quas omnis autem officiis ipsa.
        Explicabo in ut corrupti beatae placeat, illo ratione error sit sunt
        iusto aliquam odit quo ex sequi, soluta, cupiditate quibusdam magnam
        exercitationem enim ducimus voluptas quia accusantium voluptatibus! Esse
        iusto dignissimos vel excepturi exercitationem tempora a veniam expedita
        suscipit, rem accusantium consequuntur ab, cumque asperiores explicabo
        animi dolor ex odio id perspiciatis voluptatibus harum enim. Magnam ex
        est vitae autem, voluptates corrupti cumque exercitationem repellat odit
        sapiente ea quam molestias dolor debitis aliquid earum delectus maxime
        quisquam excepturi eligendi facilis a. Totam molestias ratione a
        nesciunt earum assumenda adipisci illo provident quaerat sint eum
        laborum quos, ducimus facere rerum quidem asperiores, recusandae eaque
        ex corrupti temporibus. Enim eos accusantium quia quidem vitae harum
        tempora placeat doloremque corporis adipisci atque, nam assumenda quos
        sunt fugit quae ea iste saepe expedita aliquid id dolores dolorum.
        Tempora doloribus aut alias minima expedita, natus odit, facere, soluta
        dolor tenetur vero culpa itaque enim. Placeat, exercitationem harum
        ratione voluptas minima officia veritatis. Nesciunt officia blanditiis
        laboriosam numquam praesentium quaerat sapiente, eos sint deleniti cum
        velit cumque necessitatibus asperiores ipsa unde odit nihil, expedita
        cupiditate magni vero impedit nostrum quisquam! Debitis aperiam sed
        placeat quis eaque deleniti deserunt dolorum doloribus commodi hic,
        dolorem culpa. Quam tenetur maxime quisquam deserunt explicabo
        blanditiis nobis molestias. Sapiente, veniam accusamus? Reiciendis,
        accusantium laboriosam nobis autem culpa delectus odio iste unde
        quisquam eos! Ipsam excepturi ducimus quasi repellat deleniti
        exercitationem soluta sunt maxime id. Laborum ea maiores nihil magni
        omnis quia architecto deleniti doloribus, veritatis maxime rem eaque
        voluptas explicabo, tempore deserunt aspernatur repellat quidem. Saepe
        amet esse atque laboriosam? Ipsum nesciunt ad alias voluptate
        architecto. Quibusdam obcaecati corporis repellat quas nihil
        voluptatibus dolore necessitatibus recusandae nobis, minima architecto
        corrupti dolorum eaque at quis nam aspernatur praesentium iste sequi
        illum eius itaque, expedita culpa? Quidem magni quibusdam, excepturi
        dolores vel consectetur suscipit iusto. Error, accusantium? Quasi
        aperiam necessitatibus obcaecati corrupti saepe accusamus recusandae
        nobis laborum. Non in ullam vitae esse nesciunt repudiandae facilis,
        reprehenderit magni expedita aut nihil vero incidunt, perspiciatis
        voluptas qui amet distinctio eius iste similique consequatur omnis
        veritatis minima! Vel, commodi et animi ipsa vero tempora, similique
        mollitia repellendus maxime minus atque necessitatibus facilis aliquid
        sapiente dolore ut optio harum? Nemo illum at maiores harum sequi
        beatae, deleniti, reprehenderit accusamus tenetur, veniam neque
        aspernatur exercitationem. Natus, ratione laborum? Error beatae in neque
        odio magnam, id numquam minima natus, earum placeat blanditiis corporis
        amet, quaerat nemo provident consequatur labore iste debitis reiciendis
        mollitia dignissimos? Quasi rem unde et vero impedit nemo rerum incidunt
        totam pariatur sunt debitis ullam, amet quos officiis eos temporibus.
        Sapiente quas excepturi iure facilis dolor, ex corrupti inventore!
        Itaque doloremque quo velit nemo molestiae possimus aliquam, amet
        praesentium quos ratione maiores pariatur reiciendis corrupti assumenda
        officiis voluptas iusto! Recusandae enim velit sint eaque commodi maxime
        maiores aperiam est at? Temporibus eos architecto corrupti rerum itaque,
        soluta enim molestiae. Reiciendis ullam, blanditiis explicabo sapiente
        ab quibusdam, temporibus sed, animi cupiditate esse quo ratione. Aliquam
        est veritatis odit fugit eum vitae quos similique, quasi reiciendis
        temporibus ratione, pariatur exercitationem, accusantium hic sapiente
        iure? Ipsam facilis est, in, harum laudantium dolorem, quaerat corrupti
        consequatur eos beatae recusandae suscipit doloribus? Voluptatibus
        molestias tempore maxime quidem facere sed modi est quisquam mollitia
        cupiditate? Laudantium, cupiditate ducimus? Exercitationem optio
        repudiandae deserunt dignissimos quos voluptatem voluptatum cum aut
        tempore mollitia, nesciunt praesentium expedita eius ipsam nulla
        perspiciatis temporibus et harum? Ad ullam nam, eligendi eaque quod
        veniam, consectetur quisquam natus aspernatur porro dignissimos omnis
        consequatur deleniti fugit, perspiciatis dolorem repellendus. Sit fugit
        rerum ex libero animi quos sequi, quas delectus dignissimos numquam
        impedit asperiores accusantium optio exercitationem suscipit sint
        repellat tenetur natus. Aperiam molestias nemo repellat error sint
        facilis quasi. Libero, blanditiis. Explicabo quae nulla ex error
        consequatur odit nesciunt animi, incidunt quos alias beatae ab veniam,
        veritatis, ad delectus perspiciatis quo reiciendis? Nemo, numquam beatae
        omnis quos provident eius blanditiis, reprehenderit consequuntur ullam
        voluptatem consectetur expedita ducimus, tenetur deleniti ut voluptates
        voluptate delectus adipisci tempora quam! Architecto voluptatem atque
        aperiam nam enim quos, officiis eius dolore repudiandae laboriosam
        dolorum iusto similique asperiores possimus et quasi fugiat placeat
        laborum officia neque! Possimus praesentium a, expedita, esse veniam
        dolores non quibusdam, placeat debitis obcaecati distinctio excepturi
        magnam facere consectetur aliquid animi cumque neque doloremque.
        Cupiditate unde labore quas molestiae natus, sed distinctio saepe rerum
        aliquam mollitia soluta atque. Animi cumque quo dolorum dolor aliquam
        nisi id sapiente sit, ullam tenetur itaque soluta tempora alias modi
        facilis? Necessitatibus, et nostrum minus corporis natus similique
        perspiciatis, nobis ut harum, magnam fugit? Temporibus commodi dicta
        debitis exercitationem ducimus, autem id quidem expedita corrupti ut
        nulla enim soluta deserunt porro atque, a iste adipisci totam error
        nobis quasi cum! Beatae provident ab ullam, reprehenderit iste deleniti
        facere at debitis impedit in ex velit? Ducimus dicta numquam odio maxime
        eius accusantium quisquam vero soluta hic est perferendis, aliquid id
        delectus voluptates consequuntur eligendi quos ratione nihil, provident
        iste consequatur saepe! Obcaecati harum illum quam consequatur itaque
        laborum voluptatibus ipsam nisi temporibus in! Amet, inventore velit
        error dicta minus pariatur autem. Cum sunt aliquam corporis non aut ea
        perferendis, similique culpa tempora porro dolore eum tempore odit dicta
        dignissimos, quasi eius laboriosam tenetur laudantium dolorum debitis
        minus? Excepturi adipisci et est ullam non consectetur tenetur! Expedita
        dignissimos, ipsa molestias nihil sint vel optio tempora laudantium
        impedit quisquam eum iste aliquid aspernatur ea! Necessitatibus labore
        accusantium excepturi amet assumenda delectus ad nemo reprehenderit
        dicta incidunt, facere expedita minus magni temporibus velit!
        Exercitationem, nisi eligendi quibusdam culpa ducimus nulla corporis eum
        sed, repudiandae asperiores deserunt consequuntur, optio architecto eius
        maxime cupiditate necessitatibus? Pariatur explicabo labore, incidunt
        totam optio suscipit tempora ex quo placeat deserunt, alias eius vitae
        doloremque et dolorum, rem corrupti architecto quos consectetur?
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
