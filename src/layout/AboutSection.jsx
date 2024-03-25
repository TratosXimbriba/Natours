import Button from "../components/Button";
import ImageTrio from "../components/ImageTrio";

function AboutSection() {
  return (
    <main>
      <section className="mt-[-23vh] bg-[#f7f7f7] py-[25rem]">
        <div className="text-center">
          <h2 className="inline-block bg-green-gradient bg-clip-text pb-[8rem] text-5xl font-bold uppercase text-transparent">
            Exciting tours for adventurous people
          </h2>
        </div>

        <div className="align-center grid grid-cols-4 justify-items-center gap-4">
          <div className=" col-span-2 pl-[10rem]">
            <h3 className="text-2xl font-bold uppercase">
              You&rsquo;re going to fall in love with nature
            </h3>
            <p className="mb-[3rem] text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              perferendis animi odit, totam, in tempore recusandae dolorum
              asperiores officia fuga, molestiae inventore reiciendis temporibus
            </p>
            <h3 className="text-2xl font-bold uppercase">
              Live adventures like you never have before
            </h3>
            <p className="pb-[3rem] text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsa
              modi non dignissimos. Quod architecto, laboriosam amet excepturi
              laborum ea! Doloribus, deserunt eveniet.
            </p>
            <Button type={"secondary"}>Learn more &rarr;</Button>
          </div>
          <div className="col-start-3 col-end-4 w-full">
            <ImageTrio
              src1={"/public/img/nat-1-large.jpg"}
              src2={"/public/img/nat-2-large.jpg"}
              src3={"/public/img/nat-3-large.jpg"}
              alt={"Tour photo"}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutSection;
