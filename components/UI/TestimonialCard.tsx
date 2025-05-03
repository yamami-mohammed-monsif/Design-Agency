import Image from "next/image";

type testimonialCardProps = {
  name: string;
  role: string;
  content: string;
  avatar: string;
};

const TestimonialCard = ({
  name,
  role,
  content,
  avatar,
}: testimonialCardProps) => {
  return (
    <div className="bg-light-blue text-center flex flex-col gap-4 p-4 rounded-2xl max-w-[650px] mx-auto shadow-lg">
      <div className="relative h-20 w-20 md:h-24 md:w-24 mx-auto">
        <Image
          src={avatar}
          alt={`${name}'s testimonial`}
          fill
          sizes="(max-width: 768px) 3rem, 4rem"
          className="object-cover object-center rounded-full"
          loading="lazy"
        />
      </div>
      <p className="text-xl lading-[170%] text-text">"{content}"</p>
      <div className="text-center">
        <h3 className="text-lg md:text-xl font-bold text-heading">{name}</h3>
        <p className="text-sm text-text">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
