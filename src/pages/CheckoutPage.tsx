import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, CreditCard, Truck, Shield, CheckCircle, User, MapPin, Phone, Mail } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  paymentMethod: 'card' | 'cash' | 'transfer';
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
}

export function CheckoutPage() {
  const { cart, getCartTotal, getCartItemsCount } = useApp();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Имя обязательно';
    if (!formData.lastName.trim()) newErrors.lastName = 'Фамилия обязательна';
    if (!formData.email.trim()) newErrors.email = 'Email обязателен';
    if (!formData.phone.trim()) newErrors.phone = 'Телефон обязателен';
    if (!formData.address.trim()) newErrors.address = 'Адрес обязателен';
    if (!formData.city.trim()) newErrors.city = 'Город обязателен';

    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Номер карты обязателен';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Срок действия обязателен';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV обязателен';
      if (!formData.cardName.trim()) newErrors.cardName = 'Имя на карте обязательно';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsProcessing(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const newOrderNumber = `KM-${Date.now().toString().slice(-6)}`;
    setOrderNumber(newOrderNumber);
    setOrderComplete(true);
    setIsProcessing(false);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Корзина пуста</h2>
          <p className="text-gray-600 mb-8">Добавьте инструменты для оформления заказа</p>
          <Link
            to="/"
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
          >
            Перейти к каталогу
          </Link>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-xl p-8">
          <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Заказ оформлен!</h2>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-1">Номер заказа:</p>
            <p className="text-2xl font-bold text-emerald-600">{orderNumber}</p>
          </div>
          
          <p className="text-gray-600 mb-8">
            Спасибо за ваш заказ! Мы свяжемся с вами в ближайшее время для подтверждения 
            и уточнения деталей доставки.
          </p>
          
          <div className="space-y-3">
            <Link
              to="/"
              className="block w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              Продолжить покупки
            </Link>
            <button
              onClick={() => window.print()}
              className="block w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Распечатать чек
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/cart" 
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад в корзину
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <CreditCard className="h-8 w-8 text-emerald-600" />
                  Оформление заказа
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-8">
                {/* Personal Information */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <User className="h-6 w-6 text-emerald-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Личные данные</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                          errors.firstName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                        }`}
                        placeholder="Введите ваше имя"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Фамилия *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                          errors.lastName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                        }`}
                        placeholder="Введите вашу фамилию"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                          errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                        }`}
                        placeholder="example@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                          errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                        }`}
                        placeholder="+996 XXX XXX XXX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Адрес доставки</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Адрес *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                          errors.address ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                        }`}
                        placeholder="Улица, дом, квартира"
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Город *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                            errors.city ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                          }`}
                          placeholder="Бишкек"
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Почтовый индекс
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 transition-colors"
                          placeholder="720000"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="h-6 w-6 text-emerald-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Способ оплаты</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <label className={`cursor-pointer border-2 rounded-lg p-4 transition-colors ${
                      formData.paymentMethod === 'card' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <CreditCard className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                        <div className="font-medium">Банковская карта</div>
                      </div>
                    </label>

                    <label className={`cursor-pointer border-2 rounded-lg p-4 transition-colors ${
                      formData.paymentMethod === 'cash' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <Truck className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                        <div className="font-medium">Наличными</div>
                      </div>
                    </label>

                    <label className={`cursor-pointer border-2 rounded-lg p-4 transition-colors ${
                      formData.paymentMethod === 'transfer' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="transfer"
                        checked={formData.paymentMethod === 'transfer'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <Phone className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                        <div className="font-medium">Перевод</div>
                      </div>
                    </label>
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Номер карты *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                            errors.cardNumber ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                          }`}
                          placeholder="1234 5678 9012 3456"
                        />
                        {errors.cardNumber && (
                          <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Срок действия *
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                              errors.expiryDate ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                            }`}
                            placeholder="MM/YY"
                          />
                          {errors.expiryDate && (
                            <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                              errors.cvv ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                            }`}
                            placeholder="123"
                          />
                          {errors.cvv && (
                            <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Имя на карте *
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                            errors.cardName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                          }`}
                          placeholder="IVAN PETROV"
                        />
                        {errors.cardName && (
                          <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Обработка заказа...
                    </>
                  ) : (
                    <>
                      <Shield className="h-5 w-5" />
                      Оформить заказ
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Ваш заказ</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map(({ instrument, quantity }) => (
                  <div key={instrument.id} className="flex gap-4">
                    <img
                      src={instrument.image}
                      alt={instrument.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm">{instrument.name}</h3>
                      <p className="text-sm text-gray-600">Количество: {quantity}</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {(instrument.price * quantity).toLocaleString('ru-RU')} сом
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Товары ({getCartItemsCount()}):</span>
                  <span className="font-medium">{getCartTotal().toLocaleString('ru-RU')} сом</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Доставка:</span>
                  <span className="font-medium text-green-600">Бесплатно</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Итого:</span>
                  <span className="text-emerald-600">{getCartTotal().toLocaleString('ru-RU')} сом</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>Безопасная оплата</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="h-4 w-4 text-green-500" />
                  <span>Бесплатная доставка</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Гарантия качества</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}