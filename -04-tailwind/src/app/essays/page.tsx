import Link from "next/link";
import Image from "next/image";

const essays = [
    { title: "Menulis untuk Pemula", url: "/essays/menulis-untuk-pemula", imageSrc: "/images/essay1.jpg", preview: "Panduan dasar bagi pemula untuk memulai menulis dengan percaya diri." },
    { title: "Pentingnya Riset Sebelum Menulis", url: "/essays/riset-sebelum-menulis", imageSrc: "/images/essay2.jpg", preview: "Mengapa melakukan riset sebelum menulis itu sangat penting?" },
    { title: "Gaya Bahasa dalam Esai", url: "/essays/gaya-bahasa", imageSrc: "/images/essay3.jpg", preview: "Menyesuaikan gaya bahasa agar esai lebih menarik dan mudah dipahami." },
    { title: "Menentukan Topik yang Menarik", url: "/essays/menentukan-topik", imageSrc: "/images/essay4.jpg", preview: "Tips untuk memilih topik esai yang menarik dan relevan." },
    { title: "Struktur Esai yang Baik", url: "/essays/struktur-esai", imageSrc: "/images/essay5.jpg", preview: "Panduan menyusun struktur esai agar lebih sistematis dan mudah dipahami." },
    { title: "Menggunakan Sumber yang Valid", url: "/essays/sumber-valid", imageSrc: "/images/essay6.jpg", preview: "Cara memastikan sumber yang digunakan dalam esai valid dan dapat dipercaya." },
];

export default function Essays() {
    return (
        <div className="mt-16 px-8">
            <header>
                <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
                <p className="text-base mt-6 text-zinc-600">
                    Berikut adalah beberapa artikel yang telah saya tulis.
                </p>
            </header>
            <div className="mt-8">
                <h2 className="text-2xl">Daftar Esai</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 mt-3">
                    {essays.map((essay, index) => (
                        <EssayItem key={index} title={essay.title} url={essay.url} imageSrc={essay.imageSrc} preview={essay.preview} />
                    ))}
                </div>
            </div>
        </div>
    );
}

type EssayItemProps = {
    title: string;
    url: string;
    imageSrc: string;
    preview: string;
};

function EssayItem({ title, url, imageSrc, preview }: EssayItemProps) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white border border-gray-200">
            <Image className="w-full h-40 object-cover" src={imageSrc} alt={title} width={500} height={250} />
            <h3 className="font-bold text-xl mt-4 mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{preview}</p>
            <Link href={url} className="text-blue-500 hover:underline">
                Baca selengkapnya
            </Link>
        </div>
    );
}
