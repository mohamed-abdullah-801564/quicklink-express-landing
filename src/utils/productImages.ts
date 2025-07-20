// Utility to get product images based on product name
export const getProductImage = (productName: string): string => {
  const name = productName.toLowerCase();
  
  // Food items
  if (name.includes('tomato')) return 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=300&fit=crop';
  if (name.includes('potato')) return 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop';
  if (name.includes('onion')) return 'https://images.unsplash.com/photo-1518362188013-d61dfd22e0e4?w=400&h=300&fit=crop';
  if (name.includes('apple')) return 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop';
  if (name.includes('banana')) return 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop';
  if (name.includes('orange')) return 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop';
  if (name.includes('bread')) return 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop';
  if (name.includes('milk')) return 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop';
  if (name.includes('egg')) return 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop';
  if (name.includes('cheese')) return 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop';
  if (name.includes('pizza')) return 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop';
  if (name.includes('burger')) return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop';
  if (name.includes('rice')) return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop';
  if (name.includes('chicken')) return 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop';
  
  // Clothing items
  if (name.includes('dress') || name.includes('gown')) return 'https://images.unsplash.com/photo-1566479179817-c8ed31b5cfeb?w=400&h=300&fit=crop';
  if (name.includes('shirt') || name.includes('t-shirt') || name.includes('tshirt')) return 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop';
  if (name.includes('jeans') || name.includes('pants')) return 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop';
  if (name.includes('jacket') || name.includes('coat')) return 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop';
  if (name.includes('shoe') || name.includes('sneaker')) return 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop';
  if (name.includes('bag') || name.includes('handbag')) return 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop';
  if (name.includes('watch')) return 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop';
  if (name.includes('hat') || name.includes('cap')) return 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=300&fit=crop';
  
  // Electronics
  if (name.includes('laptop') || name.includes('computer')) return 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop';
  if (name.includes('phone') || name.includes('smartphone') || name.includes('mobile')) return 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop';
  if (name.includes('tablet') || name.includes('ipad')) return 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop';
  if (name.includes('headphone') || name.includes('earphone')) return 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop';
  if (name.includes('camera')) return 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop';
  if (name.includes('speaker')) return 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop';
  if (name.includes('tv') || name.includes('television')) return 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop';
  if (name.includes('keyboard')) return 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop';
  if (name.includes('mouse')) return 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop';
  
  // Home & Kitchen
  if (name.includes('cup') || name.includes('mug')) return 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=300&fit=crop';
  if (name.includes('plate') || name.includes('dish')) return 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop';
  if (name.includes('bottle')) return 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop';
  if (name.includes('book')) return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop';
  if (name.includes('pen') || name.includes('pencil')) return 'https://images.unsplash.com/photo-1586952518485-11b180e92764?w=400&h=300&fit=crop';
  
  // Default fallback image
  return 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop';
};