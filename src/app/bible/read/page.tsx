import Verse from "@/components/Verse";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center py-16 items-center">
        <h1 className="text-3xl font-bold py-6 ">Chapter Title</h1>

        <p className="text-2xl max-w-[600px] leading-relaxed ">{chaptertxt}</p>
      </div>

      <button className=" p-6 rounded-full   left-32 top-1/4 absolute border text-xl">
        {" "}
        <ChevronLeft />
      </button>
      <button className=" p-6 rounded-full  right-32 top-1/4 absolute border text-xl">
        {" "}
        <ChevronRight />
      </button>
    </div>
  );
}

const chaptertxt = `1On the third day there was a wedding at Cana in Galilee, and the mother
of Jesus was there. 2Jesus also was invited to the wedding with his
disciples. 3When the wine ran out, the mother of Jesus said to him,
“They have no wine.” 4And Jesus said to her, “Woman, what does this have
to do with me? My hour has not yet come.” 5His mother said to the
servants, “Do whatever he tells you.” 6Now there were six stone water
jars there for the Jewish rites of purification, each holding twenty or
thirty gallons. 7Jesus said to the servants, “Fill the jars with water.”
And they filled them up to the brim. 8And he said to them, “Now draw
some out and take it to the master of the feast.” So they took it. 9When
the master of the feast tasted the water now become wine, and did not
know where it came from (though the servants who had drawn the water
knew), the master of the feast called the bridegroom 10and said to him,
“Everyone serves the good wine first, and when people have drunk freely,
then the poor wine. But you have kept the good wine until now.” 11This,
the first of his signs, Jesus did at Cana in Galilee, and manifested his
glory. And his disciples believed in him. 12After this he went down to
Capernaum, with his mother and his brothers and his disciples, and they
stayed there for a few days. Jesus Cleanses the Temple 13 The Passover
of the Jews was at hand, and Jesus went up to Jerusalem. 14In the temple
he found those who were selling oxen and sheep and pigeons, and the
money-changers sitting there. 15And making a whip of cords, he drove
them all out of the temple, with the sheep and oxen. And he poured out
the coins of the money-changers and overturned their tables. 16And he
told those who sold the pigeons, “Take these things away; do not make my
Father’s house a house of trade.” 17His disciples remembered that it was
written, “Zeal for your house will consume me.” 18So the Jews said to
him, “What sign do you show us for doing these things?” 19Jesus answered
them, “Destroy this temple, and in three days I will raise it up.” 20The
Jews then said, “It has taken forty-six years to build this temple, and
will you raise it up in three days?” 21But he was speaking about the
temple of his body. 22When therefore he was raised from the dead, his
disciples remembered that he had said this, and they believed the
Scripture and the word that Jesus had spoken. Jesus Knows What Is in Man
23Now when he was in Jerusalem at the Passover Feast, many believed in
his name when they saw the signs that he was doing. 24But Jesus on his
part did not entrust himself to them, because he knew all people 25and
needed no one to bear witness about man, for he himself knew what was in
man.`;
export default page;