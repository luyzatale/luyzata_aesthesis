export interface Photo {
  id: string
  slug: string
  filename: string
  alt: string
  caption?: string
  category: string
  tags: string[]
  featured: boolean
  date?: string
  width?: number
  height?: number
}

export const photoCategories = ['Tudo'] as const
export type PhotoCategory = (typeof photoCategories)[number]

export const photos: Photo[] = [
  { id: 'f001', slug: 'autumn2025', filename: 'Autumn2025.avif', alt: 'Autumn 2025', category: 'Tudo', tags: [], featured: false },
  { id: 'f002', slug: 'ee79c7-0206ec4a', filename: 'ee79c7_0206ec4a1236464b933dbcdc3d18eb29~mv2_d_2322_4128_s_2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f003', slug: 'ee79c7-02ce0647', filename: 'ee79c7_02ce0647b84b4f2f900134eaedd4d486~mv2_d_2322_4128_s_2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f004', slug: 'ee79c7-0600a1e9', filename: 'ee79c7_0600a1e9c7fe48649a884b76e98fde80~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f005', slug: 'ee79c7-08dc8116', filename: 'ee79c7_08dc811643d8465b9e80d294129a5dce~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f006', slug: 'ee79c7-08f02c86', filename: 'ee79c7_08f02c8699ad43f8bb45953a50f8e9d1.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f007', slug: 'ee79c7-0946b834', filename: 'ee79c7_0946b834aa49476181be2e7108981d63.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f008', slug: 'ee79c7-0a426ee1', filename: 'ee79c7_0a426ee12ded4013adb44255e1c360da~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f009', slug: 'ee79c7-0ba417f9', filename: 'ee79c7_0ba417f99d464f27900b344ac7d7a05d~mv2_d_2560_1920_s_2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f010', slug: 'ee79c7-11786da2', filename: 'ee79c7_11786da2ba7648f69665477443b873ee~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f011', slug: 'ee79c7-1557c455', filename: 'ee79c7_1557c4551bc54196ac2b4af7c0a0e88e.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f012', slug: 'ee79c7-19d95693', filename: 'ee79c7_19d95693e07f4ac1b8c4690dd281a62a~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f013', slug: 'ee79c7-1c382fcb', filename: 'ee79c7_1c382fcb92aa43568ef0aa62ab111657~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f014', slug: 'ee79c7-1d058948', filename: 'ee79c7_1d05894806c54b468601b948973b4f47.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f015', slug: 'ee79c7-2100a372', filename: 'ee79c7_2100a372936a450c81c84956d6c5abec.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f016', slug: 'ee79c7-2459b644', filename: 'ee79c7_2459b64485614e8f9b6a3f273b1efdad.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f017', slug: 'ee79c7-2abf14da', filename: 'ee79c7_2abf14da129f4e3392060c7aea25e534~mv2_d_4128_2322_s_2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f018', slug: 'ee79c7-2b3fffec', filename: 'ee79c7_2b3fffeca2864ce2971aea332e98ece0.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f019', slug: 'ee79c7-2cb06826', filename: 'ee79c7_2cb06826d91f4e57a13040914e70d06c.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f020', slug: 'ee79c7-3307c087', filename: 'ee79c7_3307c08755d945278e48b9e952ef0aec~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f021', slug: 'ee79c7-391e22d0', filename: 'ee79c7_391e22d03fa14dcb905aa972632a0ff8.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f022', slug: 'ee79c7-3a5268fb', filename: 'ee79c7_3a5268fba74745118afedf0c5c85807a.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f023', slug: 'ee79c7-3b8b2f0a', filename: 'ee79c7_3b8b2f0ab0bc47f9b2fddbbf40bdc5fc.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f024', slug: 'ee79c7-40ca8a86', filename: 'ee79c7_40ca8a86811740778a20c867968417e9.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f025', slug: 'ee79c7-43ed91a3', filename: 'ee79c7_43ed91a305e44f3b92e30f91baee698b~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f026', slug: 'ee79c7-462c7412', filename: 'ee79c7_462c741242264f5ba1f519be16504e6a.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f027', slug: 'ee79c7-4fb44e32', filename: 'ee79c7_4fb44e32efd94c809f767ea60cd55b3c.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f028', slug: 'ee79c7-53b52b53', filename: 'ee79c7_53b52b53c0be4b65bcba99e9ff3eff6b.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f029', slug: 'ee79c7-579b0da4', filename: 'ee79c7_579b0da4809a4ccea58d697478cfd22a.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f030', slug: 'ee79c7-5eed5c2e', filename: 'ee79c7_5eed5c2e3c4c4fca9012f53ffbebf588.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f031', slug: 'ee79c7-5ffb591f', filename: 'ee79c7_5ffb591fe31d4cad84ca4d59b29a2c39~mv2_d_4128_2322_s_2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f032', slug: 'ee79c7-69c120cf', filename: 'ee79c7_69c120cf479749528bbdc0008a9f490a~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f033', slug: 'ee79c7-6b2567ed', filename: 'ee79c7_6b2567ed98dc4903af1e11a82515fb34~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f034', slug: 'ee79c7-6bb7067d', filename: 'ee79c7_6bb7067d0778463da1da089c84f3fa81.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f035', slug: 'ee79c7-6d89fece', filename: 'ee79c7_6d89fece59374092ab6015577291ed21.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f036', slug: 'ee79c7-6e3e43a4', filename: 'ee79c7_6e3e43a40ac4436a9a1e0235c26af3d9.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f037', slug: 'ee79c7-70168da2', filename: 'ee79c7_70168da2bd5444deb5eb36f023d4a454~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f038', slug: 'ee79c7-7375546d', filename: 'ee79c7_7375546d98654de5b7412fbe9d01ce8d.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f039', slug: 'ee79c7-738b6a6e', filename: 'ee79c7_738b6a6eaed645e7ac42255555d922fe.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f040', slug: 'ee79c7-73a0042d', filename: 'ee79c7_73a0042dc6c94e86bc40cea461084d87.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f041', slug: 'ee79c7-74d1abf1', filename: 'ee79c7_74d1abf11f65431a8d77e0f86e73691d.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f042', slug: 'ee79c7-7536b16e', filename: 'ee79c7_7536b16e6e90425d9b7cb1e5e6fe02ee~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f043', slug: 'ee79c7-7562034b', filename: 'ee79c7_7562034b5b28496a8c8de1a9c3611e3c~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f044', slug: 'ee79c7-7fb6f7c3', filename: 'ee79c7_7fb6f7c3e1e64e1d98f8d827c20a4137.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f045', slug: 'ee79c7-830c5dc9', filename: 'ee79c7_830c5dc948f240d583530d8c9c57e32f~mv2_d_2304_2304_s_2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f046', slug: 'ee79c7-853b84d9', filename: 'ee79c7_853b84d98c9b40b3af4abb50206070a4~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f047', slug: 'ee79c7-8bbe9c63', filename: 'ee79c7_8bbe9c63e24046da83ed14c551d5ccc1~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f048', slug: 'ee79c7-8bcb03d7', filename: 'ee79c7_8bcb03d779fa42fa80ceb484770d0a4e~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f049', slug: 'ee79c7-9134dab1', filename: 'ee79c7_9134dab11e524e06aac6771a3c7eadc7.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f050', slug: 'ee79c7-947eee14', filename: 'ee79c7_947eee1444184f2e9ecc7fba304e8ccc~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f051', slug: 'ee79c7-96f7552b', filename: 'ee79c7_96f7552be11f46c385dbfc008abd61e7.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f052', slug: 'ee79c7-9ed5d4e0', filename: 'ee79c7_9ed5d4e028e0434b8629934dc2456e67.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f053', slug: 'ee79c7-a045722a', filename: 'ee79c7_a045722a39bc43e7abd211ed5e0bd0be~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f054', slug: 'ee79c7-a2499848', filename: 'ee79c7_a249984848eb458098650bea99949a07.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f055', slug: 'ee79c7-b1ebd479', filename: 'ee79c7_b1ebd4795eb3422ea72a3824d3616ff8.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f056', slug: 'ee79c7-b91d1093', filename: 'ee79c7_b91d109326964c5f9721fd5ddbfb933f.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f057', slug: 'ee79c7-b9507d7a', filename: 'ee79c7_b9507d7a7d1f418080352d84963d09e9~mv2_d_4128_2322_s_2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f058', slug: 'ee79c7-b9be5987', filename: 'ee79c7_b9be5987291746aeac50ba35138ff042.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f059', slug: 'ee79c7-bc913efc', filename: 'ee79c7_bc913efc2fcd43b8ba8bebf447ffa3ab.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f060', slug: 'ee79c7-c58df2f0', filename: 'ee79c7_c58df2f07b574361898f8060b618be20.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f061', slug: 'ee79c7-cf2bcf2e', filename: 'ee79c7_cf2bcf2efc9142f5930cb76d86451d32.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f062', slug: 'ee79c7-d12f5cc8', filename: 'ee79c7_d12f5cc87d654e4b8e948c680c940800~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f063', slug: 'ee79c7-d15abdf5', filename: 'ee79c7_d15abdf5e9f743a696f31428fae1b5ae.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f064', slug: 'ee79c7-d275f638', filename: 'ee79c7_d275f638ff89434485631fd5ec670e93~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f065', slug: 'ee79c7-d4d45983', filename: 'ee79c7_d4d459833e1d44d394db1584be5d96f4~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f066', slug: 'ee79c7-d7da3619', filename: 'ee79c7_d7da3619a9234754bb097d5298f78697~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f067', slug: 'ee79c7-d8465676', filename: 'ee79c7_d846567640c8434da942639205a7b878~mv2_d_4128_2322_s_2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f068', slug: 'ee79c7-db1cfb42', filename: 'ee79c7_db1cfb4276fd4a1eb89906c050fe47fb~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f069', slug: 'ee79c7-de99d0c0', filename: 'ee79c7_de99d0c09e724e06a6b9d3d158e7ab6d.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f070', slug: 'ee79c7-e329746c', filename: 'ee79c7_e329746cbefe4e99849eddeb709e1247.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f071', slug: 'ee79c7-e8a25154', filename: 'ee79c7_e8a25154b20b4a578c1526a2ef4274f9~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f072', slug: 'ee79c7-e8b50d9d', filename: 'ee79c7_e8b50d9dbfe34776bf13078f5d267b31~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f073', slug: 'ee79c7-ea0ad84c', filename: 'ee79c7_ea0ad84c1cad401d95b9753d60e612d3~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f074', slug: 'ee79c7-eb4b7f06', filename: 'ee79c7_eb4b7f0656264840a968431abc38edfe~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f075', slug: 'ee79c7-f1f7a843', filename: 'ee79c7_f1f7a84332784957a2c946e51dc2d0bd~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f076', slug: 'ee79c7-f261cc39', filename: 'ee79c7_f261cc39b4754637b191e3b85d124ed5~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f077', slug: 'ee79c7-f3235360', filename: 'ee79c7_f32353603c934c52871f3ee41d6341de.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f078', slug: 'ee79c7-f453c17e', filename: 'ee79c7_f453c17e71a6443196cc534ceef9de86~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f079', slug: 'ee79c7-f4920b92', filename: 'ee79c7_f4920b9244f74ca7a74e54ab5478eab3.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f080', slug: 'ee79c7-f98555fc', filename: 'ee79c7_f98555fc46634228aec4000e157f4d04~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f081', slug: 'ee79c7-f9eeecd1', filename: 'ee79c7_f9eeecd17c0f428d98c78e8569057a54.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f082', slug: 'ee79c7-fa2fac9e', filename: 'ee79c7_fa2fac9e2d0e4df991c30cabba178bfd~mv2.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f083', slug: 'featherpen', filename: 'featherpen.jpg', alt: 'featherpen', category: 'Tudo', tags: [], featured: false },
  { id: 'f084', slug: 'jgr', filename: 'JGR.avif', alt: 'JGR', category: 'Tudo', tags: [], featured: false },
  { id: 'f085', slug: 'mar-e-mais-nada', filename: 'mar_e_mais_nada.avif', alt: 'Mar e mais nada', category: 'Tudo', tags: [], featured: false },
  { id: 'f086', slug: 'maybe', filename: 'maybe.avif', alt: 'Maybe', category: 'Tudo', tags: [], featured: false },
  { id: 'f087', slug: 'nothingness', filename: 'Nothingness.avif', alt: 'Nothingness', category: 'Tudo', tags: [], featured: false },
  { id: 'f088', slug: 'screenshot-aug-14-a', filename: 'Screenshot 2025-08-14 051451_edited.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f089', slug: 'screenshot-aug-14-b', filename: 'Screenshot 2025-08-14 070745.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f090', slug: 'screenshot-aug-14-c', filename: 'Screenshot 2025-08-14 164130.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f091', slug: 'screenshot-sep-09', filename: 'Screenshot 2025-09-09 034136.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f092', slug: 'screenshot-nov-15', filename: 'Screenshot 2025-11-15 020520.avif', alt: 'Fotografia', category: 'Tudo', tags: [], featured: false },
  { id: 'f093', slug: 'shell', filename: 'Shell.avif', alt: 'Shell', category: 'Tudo', tags: [], featured: false },
]

export function getAllPhotos(): Photo[] { return photos }
export function getFeaturedPhotos(): Photo[] { return photos.filter((p) => p.featured) }
export function getPhotoBySlug(slug: string): Photo | undefined { return photos.find((p) => p.slug === slug) }
