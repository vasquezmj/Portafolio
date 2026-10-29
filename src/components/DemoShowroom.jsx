import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaDesktop,
  FaTabletAlt,
  FaMobileAlt,
  FaCashRegister,
  FaWhatsapp,
  FaCheckCircle,
  FaArrowRight,
  FaCode,
  FaBriefcase,
  FaBolt,
  FaTags,
  FaBullseye,
  FaEye,
  FaHeart,
  FaCheck,
  FaPaintBrush,
  FaInfoCircle,
  FaStar,
  FaStarHalfAlt,
  FaClock,
  FaInstagram,
  FaStore,
  FaChevronLeft,
  FaChevronRight,
  FaBars,
  FaExternalLinkAlt,
  FaBookOpen,
  FaBookmark,
  FaSearch,
  FaSyncAlt,
  FaUndo,
  FaIdCard,
  FaPlus,
  FaTrash,
} from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import './DemoShowroom.css';

const crcFormatter = new Intl.NumberFormat('es-CR', {
  style: 'currency',
  currency: 'CRC',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const DEMO_META = [
  {
    id: 'pos',
    title: 'POS SellControl — Sistema Punto de Venta (Verdulería)',
    shortTitle: 'POS SellControl (JavaFX)',
    category: 'Proyecto · Desktop POS',
    urlDisplay: 'app://sellcontrol-pos/verduleria-vl (Java 21 + JavaFX 23 + SQLite)',
    icon: <FaCashRegister />,
    clientPitch:
      'Este es mi sistema de Punto de Venta (POS SellControl) desarrollado para una verdulería minorista. Pruébalo aquí mismo: registra ventas en múltiples pestañas por kilogramo o unidad, administra productos, controla caja, registra gastos/merma y genera tickets térmicos.',
    clientDeliverables: [
      'Ventas multi-pestaña por Kg o Unidad (Efectivo, Tarjeta, SINPE y Fiados)',
      'Impresión de ticket térmico 58mm (protocolo ESC/POS HOP-H58)',
      'Control de Caja (Ingresos, Cambios, Retiros) y Gastos / Merma',
      'Reportes con Ganancia Real (Cobradas − Gastos − Merma) y exportación a Excel',
    ],
    recruiterSpecs: {
      architecture: 'Java 21 + JavaFX 23 (FXML/CSS) + SQLite (WAL) + BCrypt + ESC/POS',
      highlights: [
        'Réplica interactiva 1:1 de las 8 vistas FXML reales del proyecto punto_de_venta (Dashboard, Ventas, Productos, Caja, Gastos/Merma, Reportes, Ticket y Login).',
        'Estado compartido entre módulos: agregar productos, cobrar fiados o registrar gastos/mermas recalcula en vivo la Ganancia Real en Reportes.',
        'Simulador fiel del generador de tickets térmicos de 32 columnas (TicketPrintService.java) con configuración dinámica.',
      ],
      stack: ['Java 21', 'JavaFX 23', 'SQLite (WAL)', 'BCrypt', 'ESC/POS 58mm', 'Apache POI'],
    },
  },
  {
    id: 'mamochi',
    title: 'Mamochi — Hecho con Amor (Tienda de Crochet Artesanal)',
    shortTitle: 'Mamochi (Sitio Web Real)',
    category: 'Proyecto · Landing & Catálogo',
    urlDisplay: 'https://mamochi.vercel.app',
    liveUrl: 'https://mamochi.vercel.app/',
    icon: <FaStore />,
    clientPitch:
      'Esta es la página web que diseñé y desarrollé para Mamochi, tienda de productos artesanales hechos a mano con crochet. Explora su diseño original con fotos, carrusel de promociones, historia de marca, catálogo con botones a WhatsApp y sección de encargos personalizados.',
    clientDeliverables: [
      'Diseño personalizado con identidad de marca ("Hecho con amor")',
      'Carrusel de Promociones del Día y catálogo de productos con zoom',
      'Botones de consulta directa a WhatsApp con mensaje prellenado por producto',
      'Sección de Encargos Personalizados (adelanto 50%), reseñas y horarios',
    ],
    recruiterSpecs: {
      architecture: 'HTML5 Semántico + CSS3 Custom Properties + Bootstrap 5.3 + Vanilla JS',
      highlights: [
        'Réplica exacta del código fuente real de la carpeta Mamochi utilizando sus activos gráficos originales, paleta pastel (#FF8FA3, #C94A6A, #FAF7F5) y tipografías.',
        'Integración conversacional con WhatsApp API (wa.me) con mensajes específicos para cada línea de producto y encargos personalizados.',
        'Navegación fluida por secciones, carrusel interactivo y adaptación responsiva para Desktop, Tablet y Móvil.',
      ],
      stack: ['HTML5', 'CSS3', 'Bootstrap 5.3', 'JavaScript ES6+', 'Google Fonts', 'Vercel'],
    },
  },
  {
    id: 'biblioteca',
    title: 'Biblioteca Pública — Gestión Bibliotecaria (Spring Boot)',
    shortTitle: 'Biblioteca Pública (Spring Boot)',
    category: 'Proyecto · Spring Boot 4 + MySQL',
    urlDisplay: 'http://localhost:8080/ (Spring Boot 4.0.6 + Thymeleaf + MySQL 8)',
    icon: <FaBookOpen />,
    clientPitch:
      'Este es mi sistema web institucional para Biblioteca Pública desarrollado en Java con Spring Boot y MySQL. Pruébalo en vivo: busca libros por título, autor, ISBN o género, consulta fichas bibliográficas, reserva ejemplares por 14 días, renueva préstamos en línea y opera la Mesa de Circulación bibliotecaria.',
    clientDeliverables: [
      'Catálogo bibliográfico público con filtros por género, ISBN y disponibilidad',
      'Reserva en línea con descuento automático de stock y hasta 2 renovaciones (+14d)',
      'Panel administrativo y Mesa de Circulación (entregas en mostrador y devoluciones)',
      'Internacionalización en vivo (ES · EN · FR · PT) y Carnet Digital de Lector',
    ],
    recruiterSpecs: {
      architecture: 'Java 21 + Spring Boot 4.0.6 + Spring Security 6 (BCrypt/Roles) + JPA/Hibernate + Thymeleaf',
      highlights: [
        'Réplica fiel de las vistas Thymeleaf y estética editorial (#14283D, #B89138, #F7F5F0) del proyecto SistemaBiblioteca.',
        'Lógica transaccional real de PrestamoService: reservar descuenta stock disponible, cancelar o recibir devolución reintegra el ejemplar automáticamente.',
        'Soporte multi-idioma reactivo (Español, Inglés, Francés y Portugués) basado en los archivos messages_*.properties del proyecto.',
      ],
      stack: ['Java 21', 'Spring Boot 4', 'Spring Security 6', 'Spring Data JPA', 'Thymeleaf', 'MySQL 8', 'Docker'],
    },
  },
];

/* ============================================================================
   PROYECTO REAL 1: POS SELLCONTROL (Réplica exacta de punto_de_venta JavaFX)
   ============================================================================ */
const INITIAL_SELLCONTROL_PRODUCTS = [
  { id: 1, nombre: 'Tomate Nacional Primera', tipo: 'VERDURA', tipoUnidad: 'KG', precio: 1200, activo: true },
  { id: 2, nombre: 'Papa Amarilla Lavada', tipo: 'VERDURA', tipoUnidad: 'KG', precio: 1450, activo: true },
  { id: 3, nombre: 'Cebolla Blanca Trenza', tipo: 'VERDURA', tipoUnidad: 'KG', precio: 1100, activo: true },
  { id: 4, nombre: 'Aguacate Hass Nacional', tipo: 'FRUTA', tipoUnidad: 'KG', precio: 2800, activo: true },
  { id: 5, nombre: 'Plátano Maduro Seleccionado', tipo: 'FRUTA', tipoUnidad: 'UNIDAD', precio: 250, activo: true },
  { id: 6, nombre: 'Piña Dorada Dulce', tipo: 'FRUTA', tipoUnidad: 'UNIDAD', precio: 1000, activo: true },
  { id: 7, nombre: 'Frijol Rojo Nuevo', tipo: 'LEGUMBRES', tipoUnidad: 'KG', precio: 1650, activo: true },
  { id: 8, nombre: 'Zanahoria Fresca Cartago', tipo: 'VERDURA', tipoUnidad: 'KG', precio: 850, activo: true },
  { id: 9, nombre: 'Chile Dulce Grande', tipo: 'VERDURA', tipoUnidad: 'UNIDAD', precio: 300, activo: true },
  { id: 10, nombre: 'Bolsas Biodegradables Empaque', tipo: 'OTRO', tipoUnidad: 'UNIDAD', precio: 100, activo: true },
];

const INITIAL_SELLCONTROL_SALES = [
  {
    id: 101,
    fechaHora: '2026-10-27 08:45',
    cajero: 'Administrador',
    total: 4250,
    metodoPago: 'EFECTIVO',
    estado: 'COBRADA',
    clienteNombre: '',
    montoPagado: 5000,
    cambio: 750,
    detalles: [
      { productoId: 1, nombreProducto: 'Tomate Nacional Primera', cantidad: 1.5, tipoUnidad: 'KG', subtotal: 1800 },
      { productoId: 2, nombreProducto: 'Papa Amarilla Lavada', cantidad: 1.0, tipoUnidad: 'KG', subtotal: 1450 },
      { productoId: 6, nombreProducto: 'Piña Dorada Dulce', cantidad: 1.0, tipoUnidad: 'UNIDAD', subtotal: 1000 },
    ],
  },
  {
    id: 102,
    fechaHora: '2026-10-27 09:30',
    cajero: 'Administrador',
    total: 5600,
    metodoPago: 'SINPE',
    estado: 'COBRADA',
    clienteNombre: '',
    montoPagado: 0,
    cambio: 0,
    detalles: [
      { productoId: 4, nombreProducto: 'Aguacate Hass Nacional', cantidad: 2.0, tipoUnidad: 'KG', subtotal: 5600 },
    ],
  },
  {
    id: 103,
    fechaHora: '2026-10-27 10:15',
    cajero: 'María Cajera',
    total: 3300,
    metodoPago: 'TARJETA',
    estado: 'COBRADA',
    clienteNombre: '',
    montoPagado: 0,
    cambio: 0,
    detalles: [
      { productoId: 7, nombreProducto: 'Frijol Rojo Nuevo', cantidad: 2.0, tipoUnidad: 'KG', subtotal: 3300 },
    ],
  },
  {
    id: 104,
    fechaHora: '2026-10-27 11:05',
    cajero: 'Administrador',
    total: 2950,
    metodoPago: 'EFECTIVO',
    estado: 'PENDIENTE',
    clienteNombre: 'Don Carlos Vecino',
    montoPagado: 0,
    cambio: 0,
    detalles: [
      { productoId: 3, nombreProducto: 'Cebolla Blanca Trenza', cantidad: 1.5, tipoUnidad: 'KG', subtotal: 1650 },
      { productoId: 5, nombreProducto: 'Plátano Maduro Seleccionado', cantidad: 4.0, tipoUnidad: 'UNIDAD', subtotal: 1000 },
      { productoId: 9, nombreProducto: 'Chile Dulce Grande', cantidad: 1.0, tipoUnidad: 'UNIDAD', subtotal: 300 },
    ],
  },
];

const INITIAL_CAJA_MOVS = [
  { id: 1, tipo: 'INGRESO', monto: 25000, motivo: 'Fondo inicial de caja apertura', usuario: 'Administrador', fecha: '2026-10-27 07:30' },
  { id: 2, tipo: 'CAMBIO', monto: 5000, motivo: 'Cambio de billete de ₡10.000 en monedas', usuario: 'Administrador', fecha: '2026-10-27 09:10' },
];

const INITIAL_GASTOS = [
  { id: 1, tipo: 'ABASTECIMIENTO', monto: 3500, descripcion: 'Compra de bolsas y mallas en CENADA', fecha: '2026-10-27 08:00' },
];

const INITIAL_MERMAS = [
  { id: 1, descripcion: 'Tomates maduros dañados en transporte (0.8 kg)', monto: 950, fecha: '2026-10-27 08:20' },
];

const INITIAL_USUARIOS = [
  { id: 1, nombre: 'Administrador General', usuario: 'admin', rol: 'ADMIN', activo: true, creado: '2026-01-10' },
  { id: 2, nombre: 'María Cajera Turno 1', usuario: 'maria', rol: 'CAJERO', activo: true, creado: '2026-02-14' },
];

const DEFAULT_TICKET_CONFIG = {
  nombreNegocio: 'VERDULERIA VL',
  subtitulo: 'SellControl POS',
  direccion: 'Alajuela, Costa Rica',
  telefono: 'Tel: 7003-7962',
  cedula: 'Céd: 2-0845-0912',
  datoOpcional1: 'Producto fresco del productor',
  datoOpcional2: 'Horario: L-S 7:00am - 6:00pm',
  pie: 'Gracias por su compra!',
};

function formatTicketLines(venta, config) {
  const LINE_WIDTH = 32;
  const repeat = (ch, n) => ch.repeat(n);
  const trunc = (str, max) => {
    if (!str) return '';
    return str.length <= max ? str : `${str.slice(0, max - 1)}.`;
  };
  const padDetail = (prod, cant, sub) => {
    const p = prod.padEnd(16, ' ');
    const c = cant.padStart(6, ' ');
    const s = sub.padStart(8, ' ');
    return `${p} ${c} ${s}`;
  };

  const detailLines = (venta.detalles || []).map((dv) => {
    const nombre = trunc(dv.nombreProducto || `Prod #${dv.productoId}`, 16);
    const cant = `${Number(dv.cantidad).toFixed(1)}${dv.tipoUnidad === 'KG' ? 'kg' : 'u'}`;
    const sub = `${Math.round(dv.subtotal)}`;
    return padDetail(nombre, cant, sub);
  });

  return {
    sepDouble: repeat('=', LINE_WIDTH),
    sepSingle: repeat('-', LINE_WIDTH),
    headerLine: padDetail('Producto', 'Cant', 'Subt.'),
    detailLines,
    config,
    venta,
  };
}

function PosSellControlDemo() {
  // Active FXML view inside POS SellControl
  const [activeView, setActiveView] = useState('ventas'); // 'dashboard' | 'ventas' | 'productos' | 'caja' | 'gastos' | 'reportes' | 'ticket' | 'usuarios' | 'login'
  const [currentUser, setCurrentUser] = useState({ nombre: 'Administrador', usuario: 'admin', rol: 'ADMIN' });
  const [loginUser, setLoginUser] = useState('admin');
  const [loginPass, setLoginPass] = useState('admin123');
  const [loginError, setLoginError] = useState('');

  // Shared Database State (SQLite simulation)
  const [productos, setProductos] = useState(INITIAL_SELLCONTROL_PRODUCTS);
  const [ventas, setVentas] = useState(INITIAL_SELLCONTROL_SALES);
  const [movimientosCaja, setMovimientosCaja] = useState(INITIAL_CAJA_MOVS);
  const [gastos, setGastos] = useState(INITIAL_GASTOS);
  const [mermas, setMermas] = useState(INITIAL_MERMAS);
  const [usuarios, setUsuarios] = useState(INITIAL_USUARIOS);
  const [ticketConfig, setTicketConfig] = useState(DEFAULT_TICKET_CONFIG);
  const [statusMessage, setStatusMessage] = useState('Sistema SellControl POS listo · Impresora térmica HOP-H58 conectada.');

  // Multi-tab Ventas state (ventas.fxml + venta_tab.fxml)
  const [ventasMainTab, setVentasMainTab] = useState('activas'); // 'activas' | 'hoy' | 'fiados'
  const [saleTabs, setSaleTabs] = useState([
    {
      tabId: 1,
      title: 'Venta #1',
      search: '',
      selectedProductId: 1,
      cantidad: '1.5',
      metodoPago: 'EFECTIVO',
      fiado: false,
      clienteNombre: '',
      imprimirTicket: true,
      efectivoRecibido: '5000',
      selectedCartIndex: 0,
      carrito: [
        { productoId: 1, nombreProducto: 'Tomate Nacional Primera', cantidad: 1.5, tipoUnidad: 'KG', precioUnitario: 1200, subtotal: 1800 },
        { productoId: 4, nombreProducto: 'Aguacate Hass Nacional', cantidad: 1.0, tipoUnidad: 'KG', precioUnitario: 2800, subtotal: 2800 },
      ],
    },
  ]);
  const [activeSaleTabId, setActiveSaleTabId] = useState(1);
  const [nextTabSeq, setNextTabSeq] = useState(2);
  const [nextSaleSeq, setNextSaleSeq] = useState(105);
  const [selectedVentaHoyId, setSelectedVentaHoyId] = useState(101);
  const [selectedFiadoId, setSelectedFiadoId] = useState(104);
  const [ticketModalVenta, setTicketModalVenta] = useState(INITIAL_SELLCONTROL_SALES[0]);

  // Productos module state
  const [buscarProd, setBuscarProd] = useState('');
  const [selectedProdTableId, setSelectedProdTableId] = useState(1);
  const [showProdForm, setShowProdForm] = useState(false);
  const [editingProdId, setEditingProdId] = useState(null);
  const [prodForm, setProdForm] = useState({ nombre: '', tipo: 'VERDURA', tipoUnidad: 'KG', precio: '' });

  // Caja module state
  const [tipoMovCaja, setTipoMovCaja] = useState('INGRESO');
  const [montoCaja, setMontoCaja] = useState('');
  const [motivoCaja, setMotivoCaja] = useState('');

  // Gastos / Merma module state
  const [gastosTab, setGastosTab] = useState('gastos'); // 'gastos' | 'merma'
  const [tipoGasto, setTipoGasto] = useState('ABASTECIMIENTO');
  const [montoGasto, setMontoGasto] = useState('');
  const [descGasto, setDescGasto] = useState('');
  const [descMerma, setDescMerma] = useState('');
  const [montoMerma, setMontoMerma] = useState('');

  // Usuarios module state
  const [selectedUserId, setSelectedUserId] = useState(1);

  const currentSaleTab = saleTabs.find((t) => t.tabId === activeSaleTabId) || saleTabs[0];

  const updateCurrentSaleTab = (patch) => {
    setSaleTabs((prev) =>
      prev.map((tab) => (tab.tabId === currentSaleTab.tabId ? { ...tab, ...patch } : tab))
    );
  };

  const handleAddNewSaleTab = () => {
    const newId = nextTabSeq;
    setNextTabSeq(newId + 1);
    const newTab = {
      tabId: newId,
      title: `Venta #${newId}`,
      search: '',
      selectedProductId: productos.find((p) => p.activo)?.id || 1,
      cantidad: '1',
      metodoPago: 'EFECTIVO',
      fiado: false,
      clienteNombre: '',
      imprimirTicket: true,
      efectivoRecibido: '',
      selectedCartIndex: null,
      carrito: [],
    };
    setSaleTabs((prev) => [...prev, newTab]);
    setActiveSaleTabId(newId);
    setStatusMessage(`Nueva pestaña "${newTab.title}" abierta.`);
  };

  const handleCloseSaleTab = (tabIdToClose) => {
    if (saleTabs.length <= 1) {
      updateCurrentSaleTab({ carrito: [], selectedCartIndex: null });
      return;
    }
    const remaining = saleTabs.filter((t) => t.tabId !== tabIdToClose);
    setSaleTabs(remaining);
    if (activeSaleTabId === tabIdToClose) {
      setActiveSaleTabId(remaining[0].tabId);
    }
  };

  // Filtered products inside current sale tab
  const activeProducts = productos.filter((p) => p.activo);
  const matchingSaleProducts = activeProducts.filter((p) => {
    const q = currentSaleTab.search.trim().toLowerCase();
    if (!q) return true;
    return String(p.id) === q || p.nombre.toLowerCase().includes(q) || p.tipo.toLowerCase().includes(q);
  });

  const selectedProductObj =
    matchingSaleProducts.find((p) => p.id === Number(currentSaleTab.selectedProductId)) ||
    matchingSaleProducts[0] ||
    activeProducts[0];

  const parsedQty = Math.max(0, parseFloat(currentSaleTab.cantidad) || 0);
  const previewLineSubtotal = selectedProductObj ? Math.round(selectedProductObj.precio * parsedQty) : 0;
  const tabTotal = currentSaleTab.carrito.reduce((sum, item) => sum + item.subtotal, 0);

  const handleAgregarAlCarrito = (productOverride) => {
    const targetProd = productOverride || selectedProductObj;
    if (!targetProd) return;
    const qtyToUse = productOverride ? 1 : parsedQty;
    if (qtyToUse <= 0) {
      setStatusMessage('Ingrese una cantidad mayor a 0.');
      return;
    }

    const existingIdx = currentSaleTab.carrito.findIndex((i) => i.productoId === targetProd.id);
    let updatedCarrito;
    if (existingIdx >= 0) {
      updatedCarrito = currentSaleTab.carrito.map((item, idx) => {
        if (idx !== existingIdx) return item;
        const newCant = Number((item.cantidad + qtyToUse).toFixed(2));
        return {
          ...item,
          cantidad: newCant,
          subtotal: Math.round(newCant * item.precioUnitario),
        };
      });
    } else {
      updatedCarrito = [
        ...currentSaleTab.carrito,
        {
          productoId: targetProd.id,
          nombreProducto: targetProd.nombre,
          cantidad: Number(qtyToUse.toFixed(2)),
          tipoUnidad: targetProd.tipoUnidad,
          precioUnitario: targetProd.precio,
          subtotal: Math.round(qtyToUse * targetProd.precio),
        },
      ];
    }

    updateCurrentSaleTab({
      carrito: updatedCarrito,
      selectedCartIndex: updatedCarrito.length - 1,
    });
    setStatusMessage(`Agregado: ${qtyToUse} ${targetProd.tipoUnidad} de ${targetProd.nombre}`);
  };

  const handleQuitarDelCarrito = () => {
    if (currentSaleTab.carrito.length === 0) return;
    const idxToRemove =
      currentSaleTab.selectedCartIndex !== null &&
      currentSaleTab.selectedCartIndex < currentSaleTab.carrito.length
        ? currentSaleTab.selectedCartIndex
        : currentSaleTab.carrito.length - 1;
    const removed = currentSaleTab.carrito[idxToRemove];
    const nextCarrito = currentSaleTab.carrito.filter((_, idx) => idx !== idxToRemove);
    updateCurrentSaleTab({
      carrito: nextCarrito,
      selectedCartIndex: nextCarrito.length > 0 ? 0 : null,
    });
    if (removed) {
      setStatusMessage(`Producto "${removed.nombreProducto}" quitado del carrito.`);
    }
  };

  const handleRegistrarVenta = () => {
    if (currentSaleTab.carrito.length === 0) {
      setStatusMessage('El carrito está vacío. Agregue al menos un producto.');
      return;
    }
    if (currentSaleTab.fiado && !currentSaleTab.clienteNombre.trim()) {
      setStatusMessage('Para una venta fiada (PENDIENTE) debe indicar el nombre del cliente.');
      return;
    }

    const paidAmount =
      !currentSaleTab.fiado && currentSaleTab.metodoPago === 'EFECTIVO'
        ? Math.max(tabTotal, parseFloat(currentSaleTab.efectivoRecibido) || tabTotal)
        : 0;
    const changeAmount = paidAmount > tabTotal ? paidAmount - tabTotal : 0;

    const newSale = {
      id: nextSaleSeq,
      fechaHora: '2026-10-27 11:42',
      cajero: currentUser.nombre,
      total: tabTotal,
      metodoPago: currentSaleTab.metodoPago,
      estado: currentSaleTab.fiado ? 'PENDIENTE' : 'COBRADA',
      clienteNombre: currentSaleTab.fiado ? currentSaleTab.clienteNombre.trim() : '',
      montoPagado: paidAmount,
      cambio: changeAmount,
      detalles: [...currentSaleTab.carrito],
    };

    setNextSaleSeq(nextSaleSeq + 1);
    setVentas((prev) => [newSale, ...prev]);
    setSelectedVentaHoyId(newSale.id);
    if (newSale.estado === 'PENDIENTE') {
      setSelectedFiadoId(newSale.id);
    }

    if (currentSaleTab.imprimirTicket) {
      setTicketModalVenta(newSale);
    }

    updateCurrentSaleTab({
      carrito: [],
      fiado: false,
      clienteNombre: '',
      selectedCartIndex: null,
    });

    setStatusMessage(
      `✅ Venta #${newSale.id} registrada por ₡${newSale.total.toLocaleString('es-CR')} (${newSale.estado})${currentSaleTab.imprimirTicket ? ' · Ticket enviado a HOP-H58' : ''}.`
    );
  };

  const handleCobrarFiado = () => {
    const target = ventas.find((v) => v.id === selectedFiadoId && v.estado === 'PENDIENTE');
    if (!target) return;
    setVentas((prev) =>
      prev.map((v) => (v.id === target.id ? { ...v, estado: 'COBRADA' } : v))
    );
    setStatusMessage(`💰 Venta fiada #${target.id} de ${target.clienteNombre} marcada como COBRADA.`);
  };

  // Productos CRUD handlers
  const filteredTableProducts = productos.filter((p) =>
    p.nombre.toLowerCase().includes(buscarProd.toLowerCase()) ||
    p.tipo.toLowerCase().includes(buscarProd.toLowerCase())
  );

  const openNuevoProducto = () => {
    setEditingProdId(null);
    setProdForm({ nombre: '', tipo: 'VERDURA', tipoUnidad: 'KG', precio: '' });
    setShowProdForm(true);
  };

  const openEditarProducto = () => {
    const prod = productos.find((p) => p.id === selectedProdTableId);
    if (!prod) return;
    setEditingProdId(prod.id);
    setProdForm({
      nombre: prod.nombre,
      tipo: prod.tipo,
      tipoUnidad: prod.tipoUnidad,
      precio: String(prod.precio),
    });
    setShowProdForm(true);
  };

  const handleSaveProducto = (e) => {
    e.preventDefault();
    const precioNum = Math.max(50, parseFloat(prodForm.precio) || 0);
    if (!prodForm.nombre.trim()) return;

    if (editingProdId !== null) {
      setProductos((prev) =>
        prev.map((p) =>
          p.id === editingProdId
            ? {
                ...p,
                nombre: prodForm.nombre.trim(),
                tipo: prodForm.tipo,
                tipoUnidad: prodForm.tipoUnidad,
                precio: precioNum,
              }
            : p
        )
      );
      setStatusMessage(`✏️ Producto #${editingProdId} actualizado correctamente.`);
    } else {
      const nextId = productos.reduce((max, p) => Math.max(max, p.id), 0) + 1;
      setProductos((prev) => [
        ...prev,
        {
          id: nextId,
          nombre: prodForm.nombre.trim(),
          tipo: prodForm.tipo,
          tipoUnidad: prodForm.tipoUnidad,
          precio: precioNum,
          activo: true,
        },
      ]);
      setSelectedProdTableId(nextId);
      setStatusMessage(`➕ Producto "${prodForm.nombre.trim()}" creado con ID #${nextId}.`);
    }
    setShowProdForm(false);
  };

  const handleToggleActivoProd = () => {
    setProductos((prev) =>
      prev.map((p) => (p.id === selectedProdTableId ? { ...p, activo: !p.activo } : p))
    );
    setStatusMessage(`🔄 Estado Activo/Inactivo cambiado para producto #${selectedProdTableId}.`);
  };

  const handleEliminarProd = () => {
    setProductos((prev) => prev.filter((p) => p.id !== selectedProdTableId));
    setStatusMessage(`🗑️ Producto #${selectedProdTableId} eliminado.`);
  };

  // Caja handler
  const handleRegistrarCaja = (e) => {
    e.preventDefault();
    const m = parseFloat(montoCaja) || 0;
    if (m <= 0 || !motivoCaja.trim()) return;
    const nextId = movimientosCaja.length + 1;
    setMovimientosCaja((prev) => [
      {
        id: nextId,
        tipo: tipoMovCaja,
        monto: m,
        motivo: motivoCaja.trim(),
        usuario: currentUser.nombre,
        fecha: '2026-10-27 11:45',
      },
      ...prev,
    ]);
    setMontoCaja('');
    setMotivoCaja('');
    setStatusMessage(`💰 Movimiento de caja (${tipoMovCaja}) registrado por ₡${m.toLocaleString('es-CR')}.`);
  };

  // Gastos / Merma handlers
  const handleRegistrarGasto = (e) => {
    e.preventDefault();
    const m = parseFloat(montoGasto) || 0;
    if (m <= 0 || !descGasto.trim()) return;
    const nextId = gastos.length + 1;
    setGastos((prev) => [
      {
        id: nextId,
        tipo: tipoGasto,
        monto: m,
        descripcion: descGasto.trim(),
        fecha: '2026-10-27 11:48',
      },
      ...prev,
    ]);
    setMontoGasto('');
    setDescGasto('');
    setStatusMessage(`💸 Gasto (${tipoGasto}) registrado por ₡${m.toLocaleString('es-CR')}.`);
  };

  const handleRegistrarMerma = (e) => {
    e.preventDefault();
    const m = parseFloat(montoMerma) || 0;
    if (m <= 0 || !descMerma.trim()) return;
    const nextId = mermas.length + 1;
    setMermas((prev) => [
      {
        id: nextId,
        descripcion: descMerma.trim(),
        monto: m,
        fecha: '2026-10-27 11:50',
      },
      ...prev,
    ]);
    setDescMerma('');
    setMontoMerma('');
    setStatusMessage(`🗑️ Merma registrada por ₡${m.toLocaleString('es-CR')}.`);
  };

  // Reportes KPI calculations (exact formula from ReporteController.java)
  const totalVentasMonto = ventas.reduce((acc, v) => acc + v.total, 0);
  const ventasCobradasMonto = ventas
    .filter((v) => v.estado === 'COBRADA')
    .reduce((acc, v) => acc + v.total, 0);
  const ventasPendientesMonto = ventas
    .filter((v) => v.estado === 'PENDIENTE')
    .reduce((acc, v) => acc + v.total, 0);
  const totalEfectivo = ventas
    .filter((v) => v.estado === 'COBRADA' && v.metodoPago === 'EFECTIVO')
    .reduce((acc, v) => acc + v.total, 0);
  const totalTarjeta = ventas
    .filter((v) => v.estado === 'COBRADA' && v.metodoPago === 'TARJETA')
    .reduce((acc, v) => acc + v.total, 0);
  const totalSinpe = ventas
    .filter((v) => v.estado === 'COBRADA' && v.metodoPago === 'SINPE')
    .reduce((acc, v) => acc + v.total, 0);
  const totalGastosMonto = gastos.reduce((acc, g) => acc + g.monto, 0);
  const totalMermaMonto = mermas.reduce((acc, m) => acc + m.monto, 0);
  const gananciaReal = ventasCobradasMonto - totalGastosMonto - totalMermaMonto;

  const fiadosPendientes = ventas.filter((v) => v.estado === 'PENDIENTE');
  const ticketPreviewData = formatTicketLines(
    ticketModalVenta || ventas[0],
    ticketConfig
  );

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const u = loginUser.trim().toLowerCase();
    if (u === 'admin' || u === 'maria') {
      setCurrentUser(
        u === 'admin'
          ? { nombre: 'Administrador', usuario: 'admin', rol: 'ADMIN' }
          : { nombre: 'María Cajera', usuario: 'maria', rol: 'CAJERO' }
      );
      setLoginError('');
      setActiveView('dashboard');
      setStatusMessage(`Sesión iniciada como ${u.toUpperCase()} (Autenticación BCrypt verificada).`);
    } else {
      setLoginError('Usuario o contraseña incorrectos (Pruebe: admin / admin123)');
    }
  };

  return (
    <div className="javafx-pos">
      {/* Barra rápida de navegación de vistas FXML para explorar todo el sistema */}
      <div className="javafx-pos__module-switcher" role="navigation" aria-label="Módulos de POS SellControl">
        <span className="javafx-pos__module-label">
          <img src="/demos/pos/icon.png" alt="" width="18" height="18" /> Vistas reales del POS:
        </span>
        {[
          { id: 'dashboard', label: '🏠 Panel Principal' },
          { id: 'ventas', label: '🛒 Ventas' },
          { id: 'productos', label: '📦 Productos' },
          { id: 'caja', label: '💰 Caja' },
          { id: 'gastos', label: '📋 Gastos / Merma' },
          { id: 'reportes', label: '📊 Reportes' },
          { id: 'ticket', label: '🎫 Config. Ticket' },
          { id: 'usuarios', label: '👥 Usuarios' },
          { id: 'login', label: '🔐 Login' },
        ].map((mod) => (
          <button
            type="button"
            key={mod.id}
            className={`javafx-pos__mod-chip ${activeView === mod.id ? 'javafx-pos__mod-chip--active' : ''}`}
            onClick={() => setActiveView(mod.id)}
          >
            {mod.label}
          </button>
        ))}
      </div>

      {/* =========================================================
          VISTA 1: LOGIN (login.fxml)
          ========================================================= */}
      {activeView === 'login' && (
        <div className="fx-login-container">
          <h3 className="fx-app-title">POS SellControl</h3>
          <p className="fx-login-subtitle">Inicio de Sesión</p>
          <form className="fx-login-form" onSubmit={handleLoginSubmit}>
            <label className="fx-form-label" htmlFor="fx-login-user">
              Usuario:
            </label>
            <input
              id="fx-login-user"
              type="text"
              className="fx-form-input"
              placeholder="Ingrese su usuario"
              value={loginUser}
              onChange={(e) => setLoginUser(e.target.value)}
            />
            <label className="fx-form-label" htmlFor="fx-login-pass">
              Contraseña:
            </label>
            <input
              id="fx-login-pass"
              type="password"
              className="fx-form-input"
              placeholder="Ingrese su contraseña"
              value={loginPass}
              onChange={(e) => setLoginPass(e.target.value)}
            />
            {loginError && <span className="fx-error-label">{loginError}</span>}
            <button type="submit" className="fx-btn fx-btn-primary fx-w-full">
              Iniciar Sesión
            </button>
            <small className="fx-login-hint">
              Usuarios demo: <code>admin</code> / <code>admin123</code> o <code>maria</code>
            </small>
          </form>
        </div>
      )}

      {/* =========================================================
          VISTA 2: PANEL PRINCIPAL / DASHBOARD (dashboard.fxml)
          ========================================================= */}
      {activeView === 'dashboard' && (
        <div className="fx-dashboard-container">
          <div className="fx-toolbar">
            <div>
              <div className="fx-toolbar-title">Bienvenido, {currentUser.nombre}</div>
              <div className="fx-toolbar-subtitle">Rol: {currentUser.rol}</div>
            </div>
            <button
              type="button"
              className="fx-btn fx-btn-danger"
              onClick={() => setActiveView('login')}
            >
              Cerrar Sesión
            </button>
          </div>

          <div className="fx-dashboard-center">
            <h4 className="fx-section-title fx-section-title--lg">Panel Principal</h4>
            <div className="fx-menu-grid">
              <button type="button" className="fx-btn-menu" onClick={() => setActiveView('usuarios')}>
                👥  Usuarios
              </button>
              <button type="button" className="fx-btn-menu" onClick={() => setActiveView('productos')}>
                📦  Productos
              </button>
              <button type="button" className="fx-btn-menu" onClick={() => setActiveView('ventas')}>
                🛒  Ventas
              </button>
              <button type="button" className="fx-btn-menu" onClick={() => setActiveView('caja')}>
                💰  Caja
              </button>
              <button type="button" className="fx-btn-menu" onClick={() => setActiveView('gastos')}>
                📋  Gastos / Merma
              </button>
              <button type="button" className="fx-btn-menu" onClick={() => setActiveView('reportes')}>
                📊  Reportes
              </button>
              <button type="button" className="fx-btn-menu" onClick={() => setActiveView('ticket')}>
                🎫  Ticket
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 3: MÓDULO DE VENTAS (ventas.fxml + venta_tab.fxml)
          ========================================================= */}
      {activeView === 'ventas' && (
        <div className="fx-dashboard-container">
          <div className="fx-toolbar">
            <div className="fx-toolbar-title">Módulo de Ventas</div>
            <div className="fx-toolbar-actions">
              <button
                type="button"
                className="fx-btn fx-btn-secondary"
                onClick={() => setStatusMessage('🔄 Catálogo y ventas del día refrescados desde SQLite.')}
              >
                🔄 Refrescar
              </button>
              <button
                type="button"
                className="fx-btn fx-btn-secondary"
                onClick={() => setActiveView('dashboard')}
              >
                ← Volver
              </button>
            </div>
          </div>

          {/* TabPane principal de Ventas */}
          <div className="fx-tab-pane">
            <div className="fx-tab-header">
              <button
                type="button"
                className={`fx-tab-btn ${ventasMainTab === 'activas' ? 'fx-tab-btn--active' : ''}`}
                onClick={() => setVentasMainTab('activas')}
              >
                🛒 Ventas Activas
              </button>
              <button
                type="button"
                className={`fx-tab-btn ${ventasMainTab === 'hoy' ? 'fx-tab-btn--active' : ''}`}
                onClick={() => setVentasMainTab('hoy')}
              >
                📋 Ventas del Día ({ventas.length})
              </button>
              <button
                type="button"
                className={`fx-tab-btn ${ventasMainTab === 'fiados' ? 'fx-tab-btn--active' : ''}`}
                onClick={() => setVentasMainTab('fiados')}
              >
                💳 Fiados ({fiadosPendientes.length})
              </button>
            </div>

            {/* Pestaña 1: Ventas Activas (venta_tab.fxml) */}
            {ventasMainTab === 'activas' && (
              <div className="fx-tab-body">
                <div className="fx-ventas-activas-top">
                  <button
                    type="button"
                    className="fx-btn fx-btn-primary"
                    onClick={handleAddNewSaleTab}
                  >
                    ➕ Nueva Venta
                  </button>
                  <span className="fx-status-label">
                    Puede mantener abiertas múltiples ventas independientes y cobrarlas por separado.
                  </span>
                </div>

                {/* Sub-pestañas de ventas abiertas (tabPaneActivas) */}
                <div className="fx-subtabs">
                  {saleTabs.map((t) => (
                    <div
                      key={t.tabId}
                      className={`fx-subtab ${t.tabId === currentSaleTab.tabId ? 'fx-subtab--active' : ''}`}
                    >
                      <button
                        type="button"
                        className="fx-subtab__select"
                        onClick={() => setActiveSaleTabId(t.tabId)}
                      >
                        {t.title} ({t.carrito.length})
                      </button>
                      {saleTabs.length > 1 && (
                        <button
                          type="button"
                          className="fx-subtab__close"
                          onClick={() => handleCloseSaleTab(t.tabId)}
                          aria-label={`Cerrar ${t.title}`}
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* HBox de venta_tab.fxml */}
                <div className="fx-venta-tab-split">
                  {/* Panel izquierdo: agregar productos */}
                  <div className="fx-venta-left">
                    <h5 className="fx-section-title">Agregar producto</h5>

                    <label className="fx-field-label" htmlFor="fx-buscar-prod">
                      Buscar ID o Nombre:
                    </label>
                    <input
                      id="fx-buscar-prod"
                      type="text"
                      className="fx-input"
                      placeholder="Ingrese ID o nombre del producto..."
                      value={currentSaleTab.search}
                      onChange={(e) => {
                        const val = e.target.value;
                        const firstMatch = activeProducts.find(
                          (p) =>
                            String(p.id) === val.trim() ||
                            p.nombre.toLowerCase().includes(val.trim().toLowerCase())
                        );
                        updateCurrentSaleTab({
                          search: val,
                          selectedProductId: firstMatch ? firstMatch.id : currentSaleTab.selectedProductId,
                        });
                      }}
                    />

                    <label className="fx-field-label" htmlFor="fx-cmb-prod">
                      Producto seleccionado:
                    </label>
                    <select
                      id="fx-cmb-prod"
                      className="fx-combo"
                      value={selectedProductObj ? selectedProductObj.id : ''}
                      onChange={(e) =>
                        updateCurrentSaleTab({ selectedProductId: Number(e.target.value) })
                      }
                    >
                      {matchingSaleProducts.map((p) => (
                        <option key={p.id} value={p.id}>
                          #{p.id} - {p.nombre} ({crcFormatter.format(p.precio)}/{p.tipoUnidad})
                        </option>
                      ))}
                    </select>

                    {/* Accesos rápidos de verdulería */}
                    <div className="fx-quick-produce">
                      {activeProducts.slice(0, 6).map((p) => (
                        <button
                          type="button"
                          key={p.id}
                          className="fx-quick-chip"
                          onClick={() => handleAgregarAlCarrito(p)}
                          title={`Agregar +1 ${p.tipoUnidad} de ${p.nombre}`}
                        >
                          + {p.nombre.split(' ')[0]} ({crcFormatter.format(p.precio)}/{p.tipoUnidad === 'KG' ? 'kg' : 'u'})
                        </button>
                      ))}
                    </div>

                    <div className="fx-unit-price-label">
                      {selectedProductObj
                        ? `Precio: ${crcFormatter.format(selectedProductObj.precio)} por ${selectedProductObj.tipoUnidad} (${selectedProductObj.tipo})`
                        : '—'}
                    </div>

                    <label className="fx-field-label" htmlFor="fx-txt-cantidad">
                      Cantidad ({selectedProductObj?.tipoUnidad || 'KG/UNIDAD'}):
                    </label>
                    <input
                      id="fx-txt-cantidad"
                      type="number"
                      step="0.25"
                      min="0.1"
                      className="fx-input"
                      placeholder="Ej: 1.5"
                      value={currentSaleTab.cantidad}
                      onChange={(e) => updateCurrentSaleTab({ cantidad: e.target.value })}
                    />

                    <div className="fx-subtotal-preview">
                      Subtotal línea: <strong>{crcFormatter.format(previewLineSubtotal)}</strong>
                    </div>

                    <div className="fx-btn-row">
                      <button
                        type="button"
                        className="fx-btn fx-btn-primary"
                        onClick={() => handleAgregarAlCarrito()}
                      >
                        ➕ Agregar
                      </button>
                      <button
                        type="button"
                        className="fx-btn fx-btn-danger"
                        onClick={handleQuitarDelCarrito}
                      >
                        ➖ Quitar
                      </button>
                    </div>

                    <hr className="fx-separator" />

                    <label className="fx-field-label" htmlFor="fx-cmb-metodo">
                      Método de pago:
                    </label>
                    <select
                      id="fx-cmb-metodo"
                      className="fx-combo"
                      value={currentSaleTab.metodoPago}
                      onChange={(e) => updateCurrentSaleTab({ metodoPago: e.target.value })}
                    >
                      <option value="EFECTIVO">EFECTIVO</option>
                      <option value="TARJETA">TARJETA</option>
                      <option value="SINPE">SINPE MÓVIL</option>
                    </select>

                    <label className="fx-checkbox-label">
                      <input
                        type="checkbox"
                        checked={currentSaleTab.fiado}
                        onChange={(e) => updateCurrentSaleTab({ fiado: e.target.checked })}
                      />
                      <span>Venta fiada (pendiente)</span>
                    </label>

                    {currentSaleTab.fiado ? (
                      <>
                        <label className="fx-field-label" htmlFor="fx-txt-cliente">
                          Nombre del cliente:
                        </label>
                        <input
                          id="fx-txt-cliente"
                          type="text"
                          className="fx-input"
                          placeholder="Nombre del deudor"
                          value={currentSaleTab.clienteNombre}
                          onChange={(e) => updateCurrentSaleTab({ clienteNombre: e.target.value })}
                        />
                      </>
                    ) : (
                      currentSaleTab.metodoPago === 'EFECTIVO' && (
                        <>
                          <label className="fx-field-label" htmlFor="fx-txt-efectivo">
                            Efectivo entregado (para calcular vuelto):
                          </label>
                          <input
                            id="fx-txt-efectivo"
                            type="number"
                            step="500"
                            className="fx-input"
                            placeholder="Ej: 5000"
                            value={currentSaleTab.efectivoRecibido}
                            onChange={(e) =>
                              updateCurrentSaleTab({ efectivoRecibido: e.target.value })
                            }
                          />
                        </>
                      )
                    )}
                  </div>

                  {/* Panel derecho: carrito + ticket térmico 58mm */}
                  <div className="fx-venta-right">
                    <h5 className="fx-section-title">Carrito de venta</h5>

                    <div
                      tabIndex={0}
                      role="region"
                      aria-label="Tabla de carrito de venta actual"
                      className="pos-table-wrapper"
                    >
                      <table className="fx-data-table">
                        <thead>
                          <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Unidad</th>
                            <th>Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentSaleTab.carrito.length === 0 ? (
                            <tr>
                              <td colSpan={4} className="fx-table-empty">
                                Carrito vacío. Seleccione un producto a la izquierda y presione &quot;➕ Agregar&quot;.
                              </td>
                            </tr>
                          ) : (
                            currentSaleTab.carrito.map((item, idx) => (
                              <tr
                                key={`${item.productoId}-${idx}`}
                                className={
                                  currentSaleTab.selectedCartIndex === idx
                                    ? 'fx-row-selected'
                                    : ''
                                }
                                onClick={() => updateCurrentSaleTab({ selectedCartIndex: idx })}
                              >
                                <td>{item.nombreProducto}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.tipoUnidad}</td>
                                <td>{crcFormatter.format(item.subtotal)}</td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>

                    <div className="fx-venta-bottom-bar">
                      <label className="fx-checkbox-label">
                        <input
                          type="checkbox"
                          checked={currentSaleTab.imprimirTicket}
                          onChange={(e) =>
                            updateCurrentSaleTab({ imprimirTicket: e.target.checked })
                          }
                        />
                        <span>Imprimir ticket</span>
                      </label>

                      <button
                        type="button"
                        className="fx-btn fx-btn-warning"
                        onClick={() =>
                          updateCurrentSaleTab({ carrito: [], selectedCartIndex: null })
                        }
                      >
                        Limpiar
                      </button>

                      <button
                        type="button"
                        className="fx-btn fx-btn-primary fx-btn-lg"
                        onClick={handleRegistrarVenta}
                      >
                        ✅ Registrar Venta
                      </button>

                      <div className="fx-total-display">
                        <span className="fx-total-display__label">TOTAL:</span>
                        <strong className="fx-total-display__amount">
                          {crcFormatter.format(tabTotal)}
                        </strong>
                      </div>
                    </div>

                    {/* Ticket Térmico 58mm HOP-H58 (TicketPrintService.java) */}
                    {ticketModalVenta && (
                      <div className="fx-thermal-ticket-card">
                        <div className="fx-thermal-ticket-card__head">
                          <span>🖨️ Salida Impresora Térmica HOP-H58 (58mm · 32 cols ESC/POS)</span>
                          <button
                            type="button"
                            className="fx-btn fx-btn-secondary fx-btn-xs"
                            onClick={() => setActiveView('ticket')}
                          >
                            ⚙️ Configurar Ticket
                          </button>
                        </div>
                        <div className="fx-thermal-paper" aria-live="polite">
                          <div className="fx-tp-center fx-tp-bold fx-tp-double">
                            {ticketPreviewData.config.nombreNegocio}
                          </div>
                          <div className="fx-tp-center">{ticketPreviewData.config.subtitulo}</div>
                          {ticketPreviewData.config.direccion && (
                            <div className="fx-tp-center">{ticketPreviewData.config.direccion}</div>
                          )}
                          {ticketPreviewData.config.telefono && (
                            <div className="fx-tp-center">{ticketPreviewData.config.telefono}</div>
                          )}
                          {ticketPreviewData.config.cedula && (
                            <div className="fx-tp-center">{ticketPreviewData.config.cedula}</div>
                          )}
                          <div>{ticketPreviewData.sepDouble}</div>
                          {ticketPreviewData.config.datoOpcional1 && (
                            <div>{ticketPreviewData.config.datoOpcional1}</div>
                          )}
                          <div>Fecha  : {ticketPreviewData.venta.fechaHora}</div>
                          <div>Cajero : {ticketPreviewData.venta.cajero}</div>
                          <div>Pago   : {ticketPreviewData.venta.metodoPago}</div>
                          {ticketPreviewData.venta.estado === 'PENDIENTE' && (
                            <>
                              <div className="fx-tp-bold">Estado : FIADO (PENDIENTE)</div>
                              <div>Cliente: {ticketPreviewData.venta.clienteNombre}</div>
                            </>
                          )}
                          <div>{ticketPreviewData.sepSingle}</div>
                          <div className="fx-tp-bold">{ticketPreviewData.headerLine}</div>
                          <div>{ticketPreviewData.sepSingle}</div>
                          {ticketPreviewData.detailLines.map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                          <div>{ticketPreviewData.sepDouble}</div>
                          <div className="fx-tp-bold fx-tp-double">
                            TOTAL: ¢{Math.round(ticketPreviewData.venta.total)}
                          </div>
                          <div>{ticketPreviewData.sepDouble}</div>
                          {ticketPreviewData.venta.montoPagado > 0 && (
                            <>
                              <div>Efectivo: ¢{Math.round(ticketPreviewData.venta.montoPagado)}</div>
                              <div className="fx-tp-bold">
                                Cambio  : ¢{Math.round(ticketPreviewData.venta.cambio)}
                              </div>
                              <div>{ticketPreviewData.sepSingle}</div>
                            </>
                          )}
                          <div className="fx-tp-center fx-tp-footer">
                            {ticketPreviewData.config.pie}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Pestaña 2: Ventas del Día */}
            {ventasMainTab === 'hoy' && (
              <div className="fx-tab-body">
                <div
                  tabIndex={0}
                  role="region"
                  aria-label="Tabla de ventas del día"
                  className="pos-table-wrapper"
                >
                  <table className="fx-data-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Fecha/Hora</th>
                        <th>Cajero</th>
                        <th>Total</th>
                        <th>Método</th>
                        <th>Estado</th>
                        <th>Cliente</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ventas.map((v) => (
                        <tr
                          key={v.id}
                          className={selectedVentaHoyId === v.id ? 'fx-row-selected' : ''}
                          onClick={() => setSelectedVentaHoyId(v.id)}
                        >
                          <td>{v.id}</td>
                          <td>{v.fechaHora}</td>
                          <td>{v.cajero}</td>
                          <td>{crcFormatter.format(v.total)}</td>
                          <td>{v.metodoPago}</td>
                          <td>
                            <span
                              className={`fx-badge ${v.estado === 'COBRADA' ? 'fx-badge--ok' : 'fx-badge--warn'}`}
                            >
                              {v.estado}
                            </span>
                          </td>
                          <td>{v.clienteNombre || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="fx-btn-row fx-mt-10">
                  <button
                    type="button"
                    className="fx-btn fx-btn-secondary"
                    onClick={() => {
                      const found = ventas.find((v) => v.id === selectedVentaHoyId);
                      if (found) {
                        setTicketModalVenta(found);
                        setVentasMainTab('activas');
                        setStatusMessage(`🔍 Mostrando detalle de Venta #${found.id} en vista de ticket.`);
                      }
                    }}
                  >
                    🔍 Ver Detalle
                  </button>
                  <button
                    type="button"
                    className="fx-btn fx-btn-primary"
                    onClick={() => {
                      const found = ventas.find((v) => v.id === selectedVentaHoyId);
                      if (found) {
                        setTicketModalVenta(found);
                        setVentasMainTab('activas');
                        setStatusMessage(`🖨️ Reimprimiendo ticket térmico de Venta #${found.id}.`);
                      }
                    }}
                  >
                    🖨️ Imprimir Ticket
                  </button>
                </div>
              </div>
            )}

            {/* Pestaña 3: Fiados (Pendientes) */}
            {ventasMainTab === 'fiados' && (
              <div className="fx-tab-body">
                <div
                  tabIndex={0}
                  role="region"
                  aria-label="Tabla de ventas fiadas pendientes"
                  className="pos-table-wrapper"
                >
                  <table className="fx-data-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Total</th>
                        <th>Cajero</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fiadosPendientes.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="fx-table-empty">
                            No hay ventas fiadas pendientes por cobrar.
                          </td>
                        </tr>
                      ) : (
                        fiadosPendientes.map((f) => (
                          <tr
                            key={f.id}
                            className={selectedFiadoId === f.id ? 'fx-row-selected' : ''}
                            onClick={() => setSelectedFiadoId(f.id)}
                          >
                            <td>{f.id}</td>
                            <td>{f.fechaHora}</td>
                            <td>{f.clienteNombre}</td>
                            <td>{crcFormatter.format(f.total)}</td>
                            <td>{f.cajero}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="fx-btn-row fx-mt-10">
                  <button
                    type="button"
                    className="fx-btn fx-btn-primary"
                    onClick={handleCobrarFiado}
                    disabled={fiadosPendientes.length === 0}
                  >
                    💰 Cobrar Seleccionado
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="fx-action-bar fx-action-bar--right">
            <span className="fx-status-label">{statusMessage}</span>
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 4: GESTIÓN DE PRODUCTOS (productos.fxml)
          ========================================================= */}
      {activeView === 'productos' && (
        <div className="fx-dashboard-container">
          <div className="fx-toolbar">
            <div className="fx-toolbar-title">Gestión de Productos</div>
            <div className="fx-toolbar-actions">
              <input
                type="search"
                className="fx-form-input fx-toolbar-search"
                placeholder="Buscar producto..."
                aria-label="Buscar producto"
                value={buscarProd}
                onChange={(e) => setBuscarProd(e.target.value)}
              />
              <button type="button" className="fx-btn fx-btn-secondary">
                🔍 Buscar
              </button>
              <button
                type="button"
                className="fx-btn fx-btn-secondary"
                onClick={() => setActiveView('dashboard')}
              >
                ← Volver
              </button>
            </div>
          </div>

          <div className="fx-module-body">
            {showProdForm && (
              <form className="fx-inline-modal-card" onSubmit={handleSaveProducto}>
                <h5 className="fx-section-title">
                  {editingProdId ? `Editar Producto #${editingProdId}` : 'Nuevo Producto'}
                </h5>
                <div className="fx-inline-modal-grid">
                  <div>
                    <label className="fx-field-label" htmlFor="prod-nombre">Nombre:</label>
                    <input
                      id="prod-nombre"
                      type="text"
                      className="fx-input"
                      placeholder="Ej: Mango Tommy"
                      value={prodForm.nombre}
                      onChange={(e) => setProdForm({ ...prodForm, nombre: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="fx-field-label" htmlFor="prod-tipo">Tipo:</label>
                    <select
                      id="prod-tipo"
                      className="fx-combo"
                      value={prodForm.tipo}
                      onChange={(e) => setProdForm({ ...prodForm, tipo: e.target.value })}
                    >
                      <option value="FRUTA">FRUTA</option>
                      <option value="VERDURA">VERDURA</option>
                      <option value="LEGUMBRES">LEGUMBRES</option>
                      <option value="OTRO">OTRO</option>
                    </select>
                  </div>
                  <div>
                    <label className="fx-field-label" htmlFor="prod-unidad">Venta por:</label>
                    <select
                      id="prod-unidad"
                      className="fx-combo"
                      value={prodForm.tipoUnidad}
                      onChange={(e) => setProdForm({ ...prodForm, tipoUnidad: e.target.value })}
                    >
                      <option value="KG">KG (Kilogramo)</option>
                      <option value="UNIDAD">UNIDAD</option>
                    </select>
                  </div>
                  <div>
                    <label className="fx-field-label" htmlFor="prod-precio">Precio (₡):</label>
                    <input
                      id="prod-precio"
                      type="number"
                      className="fx-input"
                      placeholder="Ej: 1350"
                      value={prodForm.precio}
                      onChange={(e) => setProdForm({ ...prodForm, precio: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="fx-btn-row fx-mt-10">
                  <button type="submit" className="fx-btn fx-btn-primary">
                    💾 Guardar
                  </button>
                  <button
                    type="button"
                    className="fx-btn fx-btn-secondary"
                    onClick={() => setShowProdForm(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}

            <div
              tabIndex={0}
              role="region"
              aria-label="Tabla de productos registrados"
              className="pos-table-wrapper"
            >
              <table className="fx-data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Venta por</th>
                    <th>Precio</th>
                    <th>Activo</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTableProducts.map((p) => (
                    <tr
                      key={p.id}
                      className={selectedProdTableId === p.id ? 'fx-row-selected' : ''}
                      onClick={() => setSelectedProdTableId(p.id)}
                    >
                      <td>{p.id}</td>
                      <td>{p.nombre}</td>
                      <td>{p.tipo}</td>
                      <td>{p.tipoUnidad}</td>
                      <td>{crcFormatter.format(p.precio)}</td>
                      <td>{p.activo ? 'Sí' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="fx-action-bar">
            <div className="fx-btn-row">
              <button type="button" className="fx-btn fx-btn-primary" onClick={openNuevoProducto}>
                ➕ Nuevo
              </button>
              <button type="button" className="fx-btn fx-btn-secondary" onClick={openEditarProducto}>
                ✏️ Editar
              </button>
              <button type="button" className="fx-btn fx-btn-warning" onClick={handleToggleActivoProd}>
                🔄 Activar/Desactivar
              </button>
              <button type="button" className="fx-btn fx-btn-danger" onClick={handleEliminarProd}>
                🗑️ Eliminar
              </button>
            </div>
            <span className="fx-status-label">{statusMessage}</span>
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 5: CONTROL DE CAJA (caja.fxml)
          ========================================================= */}
      {activeView === 'caja' && (
        <div className="fx-dashboard-container">
          <div className="fx-toolbar">
            <div className="fx-toolbar-title">Control de Caja</div>
            <button
              type="button"
              className="fx-btn fx-btn-secondary"
              onClick={() => setActiveView('dashboard')}
            >
              ← Volver
            </button>
          </div>

          <div className="fx-module-body fx-split-layout">
            <form className="fx-side-form" onSubmit={handleRegistrarCaja}>
              <h5 className="fx-section-title">Registrar Movimiento</h5>
              <label className="fx-field-label" htmlFor="caja-tipo">Tipo:</label>
              <select
                id="caja-tipo"
                className="fx-combo"
                value={tipoMovCaja}
                onChange={(e) => setTipoMovCaja(e.target.value)}
              >
                <option value="INGRESO">INGRESO</option>
                <option value="CAMBIO">CAMBIO</option>
                <option value="RETIRO">RETIRO</option>
              </select>
              <label className="fx-field-label" htmlFor="caja-monto">Monto:</label>
              <input
                id="caja-monto"
                type="number"
                className="fx-input"
                placeholder="0.00"
                value={montoCaja}
                onChange={(e) => setMontoCaja(e.target.value)}
                required
              />
              <label className="fx-field-label" htmlFor="caja-motivo">Motivo:</label>
              <input
                id="caja-motivo"
                type="text"
                className="fx-input"
                placeholder="Motivo del movimiento"
                value={motivoCaja}
                onChange={(e) => setMotivoCaja(e.target.value)}
                required
              />
              <button type="submit" className="fx-btn fx-btn-primary fx-w-full">
                💰 Registrar
              </button>
            </form>

            <div className="fx-side-table">
              <h5 className="fx-section-title">Movimientos de Hoy</h5>
              <div
                tabIndex={0}
                role="region"
                aria-label="Tabla de movimientos de caja"
                className="pos-table-wrapper"
              >
                <table className="fx-data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Tipo</th>
                      <th>Monto</th>
                      <th>Motivo</th>
                      <th>Usuario</th>
                      <th>Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movimientosCaja.map((m) => (
                      <tr key={m.id}>
                        <td>{m.id}</td>
                        <td>{m.tipo}</td>
                        <td>{crcFormatter.format(m.monto)}</td>
                        <td>{m.motivo}</td>
                        <td>{m.usuario}</td>
                        <td>{m.fecha}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="fx-action-bar fx-action-bar--right">
            <span className="fx-status-label">{statusMessage}</span>
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 6: GASTOS Y MERMA (gastos.fxml)
          ========================================================= */}
      {activeView === 'gastos' && (
        <div className="fx-dashboard-container">
          <div className="fx-toolbar">
            <div className="fx-toolbar-title">Gastos y Merma</div>
            <button
              type="button"
              className="fx-btn fx-btn-secondary"
              onClick={() => setActiveView('dashboard')}
            >
              ← Volver
            </button>
          </div>

          <div className="fx-tab-pane">
            <div className="fx-tab-header">
              <button
                type="button"
                className={`fx-tab-btn ${gastosTab === 'gastos' ? 'fx-tab-btn--active' : ''}`}
                onClick={() => setGastosTab('gastos')}
              >
                📋 Gastos
              </button>
              <button
                type="button"
                className={`fx-tab-btn ${gastosTab === 'merma' ? 'fx-tab-btn--active' : ''}`}
                onClick={() => setGastosTab('merma')}
              >
                Merma
              </button>
            </div>

            {gastosTab === 'gastos' ? (
              <div className="fx-tab-body fx-split-layout">
                <form className="fx-side-form" onSubmit={handleRegistrarGasto}>
                  <h5 className="fx-section-title">Registrar Gasto</h5>
                  <label className="fx-field-label" htmlFor="gasto-tipo">Tipo:</label>
                  <select
                    id="gasto-tipo"
                    className="fx-combo"
                    value={tipoGasto}
                    onChange={(e) => setTipoGasto(e.target.value)}
                  >
                    <option value="ABASTECIMIENTO">ABASTECIMIENTO</option>
                    <option value="EMPLEADOS">EMPLEADOS</option>
                  </select>
                  <label className="fx-field-label" htmlFor="gasto-monto">Monto:</label>
                  <input
                    id="gasto-monto"
                    type="number"
                    className="fx-input"
                    placeholder="0.00"
                    value={montoGasto}
                    onChange={(e) => setMontoGasto(e.target.value)}
                    required
                  />
                  <label className="fx-field-label" htmlFor="gasto-desc">Descripción:</label>
                  <input
                    id="gasto-desc"
                    type="text"
                    className="fx-input"
                    placeholder="Descripción del gasto"
                    value={descGasto}
                    onChange={(e) => setDescGasto(e.target.value)}
                    required
                  />
                  <button type="submit" className="fx-btn fx-btn-primary fx-w-full">
                    💸 Registrar Gasto
                  </button>
                </form>

                <div className="fx-side-table">
                  <h5 className="fx-section-title">Gastos de Hoy</h5>
                  <div
                    tabIndex={0}
                    role="region"
                    aria-label="Tabla de gastos del día"
                    className="pos-table-wrapper"
                  >
                    <table className="fx-data-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Tipo</th>
                          <th>Monto</th>
                          <th>Descripción</th>
                          <th>Fecha</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gastos.map((g) => (
                          <tr key={g.id}>
                            <td>{g.id}</td>
                            <td>{g.tipo}</td>
                            <td>{crcFormatter.format(g.monto)}</td>
                            <td>{g.descripcion}</td>
                            <td>{g.fecha}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <div className="fx-tab-body fx-split-layout">
                <form className="fx-side-form" onSubmit={handleRegistrarMerma}>
                  <h5 className="fx-section-title">Registrar Merma</h5>
                  <label className="fx-field-label" htmlFor="merma-desc">Descripción:</label>
                  <input
                    id="merma-desc"
                    type="text"
                    className="fx-input"
                    placeholder="Ej: Tomates dañados"
                    value={descMerma}
                    onChange={(e) => setDescMerma(e.target.value)}
                    required
                  />
                  <label className="fx-field-label" htmlFor="merma-monto">Monto aproximado:</label>
                  <input
                    id="merma-monto"
                    type="number"
                    className="fx-input"
                    placeholder="0.00"
                    value={montoMerma}
                    onChange={(e) => setMontoMerma(e.target.value)}
                    required
                  />
                  <button type="submit" className="fx-btn fx-btn-warning fx-w-full">
                    🗑️ Registrar Merma
                  </button>
                </form>

                <div className="fx-side-table">
                  <h5 className="fx-section-title">Mermas de Hoy</h5>
                  <div
                    tabIndex={0}
                    role="region"
                    aria-label="Tabla de mermas del día"
                    className="pos-table-wrapper"
                  >
                    <table className="fx-data-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Descripción</th>
                          <th>Monto Aprox.</th>
                          <th>Fecha</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mermas.map((m) => (
                          <tr key={m.id}>
                            <td>{m.id}</td>
                            <td>{m.descripcion}</td>
                            <td>{crcFormatter.format(m.monto)}</td>
                            <td>{m.fecha}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="fx-action-bar fx-action-bar--right">
            <span className="fx-status-label">{statusMessage}</span>
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 7: REPORTES (reportes.fxml)
          ========================================================= */}
      {activeView === 'reportes' && (
        <div className="fx-dashboard-container">
          <div className="fx-toolbar">
            <div className="fx-toolbar-title">Reportes</div>
            <div className="fx-toolbar-actions">
              <button
                type="button"
                className="fx-btn fx-btn-primary"
                onClick={() => setStatusMessage('📊 Reporte recalculado con las transacciones de la sesión.')}
              >
                📊 Generar
              </button>
              <button type="button" className="fx-btn fx-btn-secondary">
                Hoy
              </button>
              <button type="button" className="fx-btn fx-btn-secondary">
                Semana
              </button>
              <button
                type="button"
                className="fx-btn fx-btn-primary"
                onClick={() =>
                  setStatusMessage(
                    '📥 Archivo "Reporte_SellControl_2026-10-27.xlsx" generado (4 hojas Apache POI: Resumen, Ventas, Por Cajero, Productos).'
                  )
                }
              >
                📥 Exportar Excel
              </button>
              <button
                type="button"
                className="fx-btn fx-btn-secondary"
                onClick={() => setActiveView('dashboard')}
              >
                ← Volver
              </button>
            </div>
          </div>

          <div className="fx-module-body">
            {/* Fila 1 de tarjetas (reportes.fxml) */}
            <div className="fx-report-cards-row">
              <div className="fx-card">
                <span className="fx-card__label">Total Ventas</span>
                <strong className="fx-card__val">{crcFormatter.format(totalVentasMonto)}</strong>
              </div>
              <div className="fx-card">
                <span className="fx-card__label fx-text-green">Cobradas</span>
                <strong className="fx-card__val">{crcFormatter.format(ventasCobradasMonto)}</strong>
              </div>
              <div className="fx-card">
                <span className="fx-card__label fx-text-warn">Pendientes</span>
                <strong className="fx-card__val">{crcFormatter.format(ventasPendientesMonto)}</strong>
              </div>
              <div className="fx-card">
                <span className="fx-card__label">Efectivo</span>
                <strong className="fx-card__val">{crcFormatter.format(totalEfectivo)}</strong>
              </div>
              <div className="fx-card">
                <span className="fx-card__label">Tarjeta</span>
                <strong className="fx-card__val">{crcFormatter.format(totalTarjeta)}</strong>
              </div>
              <div className="fx-card">
                <span className="fx-card__label">SINPE</span>
                <strong className="fx-card__val">{crcFormatter.format(totalSinpe)}</strong>
              </div>
            </div>

            {/* Fila 2: Gastos, Merma y GANANCIA REAL (reportes.fxml) */}
            <div className="fx-report-cards-row fx-report-cards-row--three">
              <div className="fx-card">
                <span className="fx-card__label fx-text-danger">Gastos</span>
                <strong className="fx-card__val fx-text-danger">
                  {crcFormatter.format(totalGastosMonto)}
                </strong>
              </div>
              <div className="fx-card">
                <span className="fx-card__label fx-text-danger">Merma</span>
                <strong className="fx-card__val fx-text-danger">
                  {crcFormatter.format(totalMermaMonto)}
                </strong>
              </div>
              <div className="fx-card-ganancia">
                <span className="fx-card-ganancia__label">
                  GANANCIA REAL (Cobradas − Gastos − Merma)
                </span>
                <strong className="fx-card-ganancia__val">
                  {crcFormatter.format(gananciaReal)}
                </strong>
              </div>
            </div>

            <div
              tabIndex={0}
              role="region"
              aria-label="Tabla de ventas en el rango del reporte"
              className="pos-table-wrapper"
            >
              <table className="fx-data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Fecha/Hora</th>
                    <th>Cajero</th>
                    <th>Total</th>
                    <th>Método</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {ventas.map((v) => (
                    <tr key={v.id}>
                      <td>{v.id}</td>
                      <td>{v.fechaHora}</td>
                      <td>{v.cajero}</td>
                      <td>{crcFormatter.format(v.total)}</td>
                      <td>{v.metodoPago}</td>
                      <td>{v.estado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="fx-action-bar fx-action-bar--right">
            <span className="fx-status-label">{statusMessage}</span>
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 8: CONFIGURAR TICKET (ticket_config.fxml)
          ========================================================= */}
      {activeView === 'ticket' && (
        <div className="fx-dashboard-container">
          <div className="fx-toolbar">
            <div className="fx-toolbar-title">🎫  Configurar Ticket</div>
            <button
              type="button"
              className="fx-btn fx-btn-secondary"
              onClick={() => setActiveView('dashboard')}
            >
              ⬅ Volver
            </button>
          </div>

          <div className="fx-module-body fx-split-layout">
            <div className="fx-card fx-ticket-form-card">
              <h5 className="fx-section-title">Datos del Ticket</h5>
              <label className="fx-field-label" htmlFor="tk-negocio">Nombre del negocio:</label>
              <input
                id="tk-negocio"
                type="text"
                className="fx-input"
                value={ticketConfig.nombreNegocio}
                onChange={(e) =>
                  setTicketConfig({ ...ticketConfig, nombreNegocio: e.target.value })
                }
              />
              <label className="fx-field-label" htmlFor="tk-sub">Subtítulo:</label>
              <input
                id="tk-sub"
                type="text"
                className="fx-input"
                value={ticketConfig.subtitulo}
                onChange={(e) => setTicketConfig({ ...ticketConfig, subtitulo: e.target.value })}
              />
              <label className="fx-field-label" htmlFor="tk-dir">Dirección (opcional):</label>
              <input
                id="tk-dir"
                type="text"
                className="fx-input"
                value={ticketConfig.direccion}
                onChange={(e) => setTicketConfig({ ...ticketConfig, direccion: e.target.value })}
              />
              <label className="fx-field-label" htmlFor="tk-tel">Teléfono (opcional):</label>
              <input
                id="tk-tel"
                type="text"
                className="fx-input"
                value={ticketConfig.telefono}
                onChange={(e) => setTicketConfig({ ...ticketConfig, telefono: e.target.value })}
              />
              <label className="fx-field-label" htmlFor="tk-pie">Mensaje de pie de ticket:</label>
              <input
                id="tk-pie"
                type="text"
                className="fx-input"
                value={ticketConfig.pie}
                onChange={(e) => setTicketConfig({ ...ticketConfig, pie: e.target.value })}
              />
              <div className="fx-btn-row fx-mt-10">
                <button
                  type="button"
                  className="fx-btn fx-btn-primary"
                  onClick={() =>
                    setStatusMessage('💾 Configuración guardada en ticket.properties.')
                  }
                >
                  💾  Guardar Cambios
                </button>
                <button
                  type="button"
                  className="fx-btn fx-btn-secondary"
                  onClick={() => {
                    setTicketConfig(DEFAULT_TICKET_CONFIG);
                    setStatusMessage('↩ Valores por defecto restaurados.');
                  }}
                >
                  ↩  Restaurar
                </button>
              </div>
            </div>

            <div className="fx-card fx-ticket-preview-card">
              <h5 className="fx-section-title">Vista Previa (58mm Courier New)</h5>
              <div className="fx-thermal-paper">
                <div className="fx-tp-center fx-tp-bold fx-tp-double">
                  {ticketPreviewData.config.nombreNegocio}
                </div>
                <div className="fx-tp-center">{ticketPreviewData.config.subtitulo}</div>
                {ticketPreviewData.config.direccion && (
                  <div className="fx-tp-center">{ticketPreviewData.config.direccion}</div>
                )}
                {ticketPreviewData.config.telefono && (
                  <div className="fx-tp-center">{ticketPreviewData.config.telefono}</div>
                )}
                <div>{ticketPreviewData.sepDouble}</div>
                <div>Fecha  : {ticketPreviewData.venta.fechaHora}</div>
                <div>Cajero : {ticketPreviewData.venta.cajero}</div>
                <div>Pago   : {ticketPreviewData.venta.metodoPago}</div>
                <div>{ticketPreviewData.sepSingle}</div>
                <div className="fx-tp-bold">{ticketPreviewData.headerLine}</div>
                <div>{ticketPreviewData.sepSingle}</div>
                {ticketPreviewData.detailLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
                <div>{ticketPreviewData.sepDouble}</div>
                <div className="fx-tp-bold fx-tp-double">
                  TOTAL: ¢{Math.round(ticketPreviewData.venta.total)}
                </div>
                <div>{ticketPreviewData.sepDouble}</div>
                <div className="fx-tp-center fx-tp-footer">{ticketPreviewData.config.pie}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 9: GESTIÓN DE USUARIOS (usuarios.fxml)
          ========================================================= */}
      {activeView === 'usuarios' && (
        <div className="fx-dashboard-container">
          <div className="fx-toolbar">
            <div className="fx-toolbar-title">Gestión de Usuarios</div>
            <button
              type="button"
              className="fx-btn fx-btn-secondary"
              onClick={() => setActiveView('dashboard')}
            >
              ← Volver
            </button>
          </div>

          <div className="fx-module-body">
            <div
              tabIndex={0}
              role="region"
              aria-label="Tabla de usuarios del sistema"
              className="pos-table-wrapper"
            >
              <table className="fx-data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Rol</th>
                    <th>Activo</th>
                    <th>Creado</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((u) => (
                    <tr
                      key={u.id}
                      className={selectedUserId === u.id ? 'fx-row-selected' : ''}
                      onClick={() => setSelectedUserId(u.id)}
                    >
                      <td>{u.id}</td>
                      <td>{u.nombre}</td>
                      <td>{u.usuario}</td>
                      <td>{u.rol}</td>
                      <td>{u.activo ? 'Sí' : 'No'}</td>
                      <td>{u.creado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="fx-action-bar">
            <div className="fx-btn-row">
              <button
                type="button"
                className="fx-btn fx-btn-warning"
                onClick={() => {
                  setUsuarios((prev) =>
                    prev.map((u) => (u.id === selectedUserId ? { ...u, activo: !u.activo } : u))
                  );
                  setStatusMessage(`🔄 Estado de usuario #${selectedUserId} actualizado.`);
                }}
              >
                🔄 Activar/Desactivar
              </button>
            </div>
            <span className="fx-status-label">{statusMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================================
   PROYECTO REAL 2: MAMOCHI (Réplica 1:1 de Mamochi/index.html + style.css)
   ============================================================================ */
const MAMOCHI_PROMOS = [
  {
    image: '/demos/mamochi/promo1.png',
    title: 'Ofertas Especiales',
    text: 'Amigurumis con descuento esta semana. ¡Consulta por WhatsApp!',
  },
  {
    image: '/demos/mamochi/flores.png',
    title: 'Ramos de Flores Eternas',
    text: 'Sorprende con flores tejidas a mano que nunca se marchitan.',
  },
  {
    image: '/demos/mamochi/llaveros.png',
    title: 'Pack de Llaveros Tejidos',
    text: 'Detalles únicos para regalar o personalizar tu bolso y llaves.',
  },
];

const MAMOCHI_PRODUCTS = [
  {
    id: 'amigurumi',
    name: 'Amigurumi Personalizado',
    image: '/demos/mamochi/amigurumi.png',
    description:
      'Adorable muñeco tejido a mano, perfecto para regalar o decorar. Diseño personalizado a tu gusto.',
    waText: 'Hola! Me interesa el producto: Amigurumi Personalizado',
  },
  {
    id: 'llaveros',
    name: 'Llaveros Tejidos',
    image: '/demos/mamochi/llaveros.png',
    description:
      'Mini amigurumis perfectos como llaveros. Variedad de diseños y colores disponibles.',
    waText: 'Hola! Me interesa el producto: Llaveros Tejidos',
  },
  {
    id: 'flores',
    name: 'Flores',
    image: '/demos/mamochi/flores.png',
    description:
      'Hermoso ramo de flores tejidas que nunca se marchitan. El regalo perfecto y duradero.',
    waText: 'Hola! Me interesa el producto: Ramo de Flores Tejidas',
  },
];

const MAMOCHI_COMMENTS = [
  {
    name: 'María Fernández',
    stars: 5,
    text: '"¡Increíble trabajo! El amigurumi que pedí superó mis expectativas. Se nota el amor y dedicación en cada detalle. Totalmente recomendado."',
  },
  {
    name: 'Andrea López',
    stars: 5,
    text: '"Las flores tejidas son hermosas y de excelente calidad. Un regalo único que durará para siempre. El servicio fue muy atento y puntual."',
  },
  {
    name: 'Carolina Mora',
    stars: 4.5,
    text: '"Los llaveros tejidos son adorables. Compré varios para regalar y todos quedaron encantados. Definitivamente volveré a comprar."',
  },
];

function MamochiRealDemo() {
  const [promoIdx, setPromoIdx] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedWaPreview, setSelectedWaPreview] = useState(null);

  const stageScrollRef = useRef(null);
  const inicioRef = useRef(null);
  const promosRef = useRef(null);
  const nosotrosRef = useRef(null);
  const productosRef = useRef(null);
  const encargosRef = useRef(null);
  const contactoRef = useRef(null);

  const scrollToSection = (ref) => {
    setMobileNavOpen(false);
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentPromo = MAMOCHI_PROMOS[promoIdx];

  return (
    <div className="mamochi-site" ref={stageScrollRef}>
      {/* Navbar real de Mamochi */}
      <nav className="mamochi-navbar">
        <div className="mamochi-navbar__inner">
          <button
            type="button"
            className="mamochi-brand"
            onClick={() => scrollToSection(inicioRef)}
          >
            <span className="mamochi-brand__name">Mamochi</span>
            <span className="mamochi-brand__tagline">Hecho con amor</span>
          </button>

          <button
            type="button"
            className="mamochi-navbar__toggler"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            aria-label="Abrir menú de navegación de Mamochi"
          >
            <FaBars aria-hidden="true" />
          </button>

          <ul className={`mamochi-nav-list ${mobileNavOpen ? 'mamochi-nav-list--open' : ''}`}>
            <li>
              <button
                type="button"
                className="mamochi-nav-link"
                onClick={() => scrollToSection(inicioRef)}
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                type="button"
                className="mamochi-nav-link"
                onClick={() => scrollToSection(nosotrosRef)}
              >
                Acerca de nosotros
              </button>
            </li>
            <li>
              <button
                type="button"
                className="mamochi-nav-link"
                onClick={() => scrollToSection(productosRef)}
              >
                Productos/Servicios
              </button>
            </li>
            <li>
              <button
                type="button"
                className="mamochi-nav-link"
                onClick={() => scrollToSection(contactoRef)}
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section real de Mamochi */}
      <div className="mamochi-hero" ref={inicioRef}>
        <div className="mamochi-hero__grid">
          <div className="mamochi-hero__content">
            <h4 className="mamochi-hero__title">Bienvenidos a Mamochi</h4>
            <p className="mamochi-hero__subtitle">
              Productos artesanales hechos a mano con crochet, creados con amor y dedicación. Cada
              pieza es única y especial, pensada para ti.
            </p>
            <button
              type="button"
              className="mamochi-btn-ofertas"
              onClick={() => scrollToSection(promosRef)}
            >
              <FaTags aria-hidden="true" /> Ofertas del día
            </button>
          </div>
          <div className="mamochi-hero__img-wrap">
            <img
              src="/demos/mamochi/hero.png"
              alt="Productos de crochet Mamochi"
              className="mamochi-hero__img"
            />
          </div>
        </div>
      </div>

      {/* Sección de Promociones (Carrusel real) */}
      <div className="mamochi-promos" ref={promosRef}>
        <div className="mamochi-section-header">
          <h4 className="mamochi-section-title">Promociones del Día</h4>
          <p className="mamochi-section-subtitle">¡Aprovecha nuestras ofertas especiales!</p>
        </div>

        <div className="mamochi-carousel">
          <img
            src={currentPromo.image}
            alt={currentPromo.title}
            className="mamochi-carousel__img"
          />
          <div className="mamochi-carousel__caption">
            <h5>{currentPromo.title}</h5>
            <p>{currentPromo.text}</p>
          </div>
          <button
            type="button"
            className="mamochi-carousel__ctrl mamochi-carousel__ctrl--prev"
            onClick={() =>
              setPromoIdx((prev) => (prev - 1 + MAMOCHI_PROMOS.length) % MAMOCHI_PROMOS.length)
            }
            aria-label="Promoción anterior"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="mamochi-carousel__ctrl mamochi-carousel__ctrl--next"
            onClick={() => setPromoIdx((prev) => (prev + 1) % MAMOCHI_PROMOS.length)}
            aria-label="Siguiente promoción"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Sección Acerca de Nosotros + Misión, Visión y Valores */}
      <div className="mamochi-about" ref={nosotrosRef}>
        <div className="mamochi-about__story">
          <span className="mamochi-badge">Sobre Mamochi</span>
          <h4 className="mamochi-section-title">Nuestra Historia</h4>
          <p>
            Mamochi nació de la pasión por el arte del tejido a crochet y el deseo de crear piezas
            únicas llenas de significado. Cada producto es elaborado completamente a mano, cuidando
            cada puntada y detalle para ofrecerte creaciones de la más alta calidad.
          </p>
          <p>
            Trabajamos con materiales suaves, seguros y duraderos, ideales para todas las edades.
            Ya sea un amigurumi personalizado, accesorios tejidos o decoraciones para el hogar, en
            Mamochi ponemos el corazón en cada creación.
          </p>
          <p className="mamochi-about__highlight">
            ¡Gracias por apoyar el trabajo artesanal y hecho con amor!
          </p>
        </div>

        <div className="mamochi-mvv">
          <div className="mamochi-mvv__grid">
            <div className="mamochi-mvv__card">
              <div className="mamochi-mvv__icon">
                <FaBullseye aria-hidden="true" />
              </div>
              <h5 className="mamochi-mvv__title">Misión</h5>
              <p className="mamochi-mvv__text">
                Crear productos artesanales de crochet únicos y de alta calidad, elaborados con
                amor y dedicación, que transmitan calidez y alegría a cada hogar y ocasión
                especial.
              </p>
            </div>

            <div className="mamochi-mvv__card">
              <div className="mamochi-mvv__icon">
                <FaEye aria-hidden="true" />
              </div>
              <h5 className="mamochi-mvv__title">Visión</h5>
              <p className="mamochi-mvv__text">
                Ser reconocidos como una marca referente en productos tejidos a mano, destacando
                por nuestra creatividad, calidad artesanal y el vínculo especial que creamos con
                cada cliente.
              </p>
            </div>

            <div className="mamochi-mvv__card">
              <div className="mamochi-mvv__icon">
                <FaHeart aria-hidden="true" />
              </div>
              <h5 className="mamochi-mvv__title">Valores</h5>
              <ul className="mamochi-mvv__list">
                <li>
                  <FaCheck aria-hidden="true" /> Amor en cada detalle
                </li>
                <li>
                  <FaCheck aria-hidden="true" /> Calidad artesanal
                </li>
                <li>
                  <FaCheck aria-hidden="true" /> Compromiso con el cliente
                </li>
                <li>
                  <FaCheck aria-hidden="true" /> Creatividad e innovación
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Productos real de Mamochi */}
      <div className="mamochi-products" ref={productosRef}>
        <div className="mamochi-section-header">
          <h4 className="mamochi-section-title">Nuestros Productos</h4>
          <p className="mamochi-section-subtitle">
            Explora nuestra colección de creaciones tejidas a mano
          </p>
        </div>

        <div className="mamochi-products__grid">
          {MAMOCHI_PRODUCTS.map((prod) => (
            <div key={prod.id} className="mamochi-product-card">
              <div className="mamochi-product-card__img-wrap">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="mamochi-product-card__img"
                  loading="lazy"
                />
              </div>
              <div className="mamochi-product-card__body">
                <h5 className="mamochi-product-card__name">{prod.name}</h5>
                <p className="mamochi-product-card__desc">{prod.description}</p>
                <div className="mamochi-product-card__footer">
                  <button
                    type="button"
                    className="mamochi-preview-wa-chip"
                    onClick={() => setSelectedWaPreview(prod)}
                  >
                    Ver mensaje WhatsApp
                  </button>
                  <a
                    href={`https://wa.me/50664419275?text=${encodeURIComponent(prod.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mamochi-btn-whatsapp"
                    title="Consultar por WhatsApp"
                    aria-label={`Consultar ${prod.name} por WhatsApp`}
                  >
                    <FaWhatsapp aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedWaPreview && (
          <div className="mamochi-wa-toast" role="status" aria-live="polite">
            <div>
              <strong>Mensaje listo para WhatsApp ({selectedWaPreview.name}):</strong>
              <code>&quot;{selectedWaPreview.waText}&quot;</code>
            </div>
            <a
              href={`https://wa.me/50664419275?text=${encodeURIComponent(selectedWaPreview.waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mamochi-btn-custom-order"
            >
              <FaWhatsapp aria-hidden="true" /> Abrir en WhatsApp
            </a>
          </div>
        )}
      </div>

      {/* Sección de Encargos Personalizados */}
      <div className="mamochi-custom-orders" ref={encargosRef}>
        <div className="mamochi-custom-orders__box">
          <div className="mamochi-custom-orders__icon">
            <FaPaintBrush aria-hidden="true" />
          </div>
          <h4 className="mamochi-section-title">Encargos Personalizados</h4>
          <p className="mamochi-custom-orders__text">
            ¿Tienes una idea especial en mente? Creamos productos tejidos totalmente personalizados
            según tus gustos y necesidades. Elige colores, tamaños y diseños únicos.
          </p>
          <div className="mamochi-custom-orders__notice">
            <FaInfoCircle aria-hidden="true" />
            <span>
              <strong>Importante:</strong> Los encargos personalizados requieren un adelanto del{' '}
              <strong>50%</strong> para iniciar la elaboración.
            </span>
          </div>
          <a
            href="https://wa.me/50664419275?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20encargo%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="mamochi-btn-custom-order"
          >
            <FaWhatsapp aria-hidden="true" /> Solicitar Encargo
          </a>
        </div>
      </div>

      {/* Sección de Comentarios de Clientes */}
      <div className="mamochi-comments">
        <div className="mamochi-section-header">
          <h4 className="mamochi-section-title">Comentarios de Clientes</h4>
          <p className="mamochi-section-subtitle">
            Lo que dicen quienes ya tienen su creación Mamochi
          </p>
        </div>

        <div className="mamochi-comments__grid">
          {MAMOCHI_COMMENTS.map((c) => (
            <div key={c.name} className="mamochi-comment-card">
              <div className="mamochi-comment-card__stars" aria-label={`${c.stars} de 5 estrellas`}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                {c.stars === 5 ? <FaStar /> : <FaStarHalfAlt />}
              </div>
              <p className="mamochi-comment-card__text">{c.text}</p>
              <strong className="mamochi-comment-card__author">- {c.name}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Contacto y Footer */}
      <div className="mamochi-contact" ref={contactoRef}>
        <div className="mamochi-section-header">
          <h4 className="mamochi-section-title">Contáctanos</h4>
          <p className="mamochi-section-subtitle">
            ¡Estamos aquí para ayudarte con tu pedido!
          </p>
        </div>

        <div className="mamochi-contact__grid">
          <div className="mamochi-contact-card">
            <div className="mamochi-contact-card__icon">
              <FaClock aria-hidden="true" />
            </div>
            <h5>Horario de Atención</h5>
            <p>
              <strong>Lunes a Viernes:</strong> 8:00 am a 3:00 pm
            </p>
            <p>
              <strong>Sábados:</strong> 8:00 am a 12:00 pm
            </p>
          </div>

          <div className="mamochi-contact-card">
            <h5>Síguenos en Redes Sociales</h5>
            <p>Conoce nuestras últimas creaciones y novedades</p>
            <div className="mamochi-social-links">
              <a
                href="https://www.instagram.com/mamochi"
                target="_blank"
                rel="noopener noreferrer"
                className="mamochi-social-btn mamochi-social-btn--ig"
              >
                <FaInstagram aria-hidden="true" /> @mamochi
              </a>
              <a
                href="https://wa.me/50664419275?text=Hola!%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="mamochi-social-btn mamochi-social-btn--wa"
              >
                <FaWhatsapp aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="mamochi-contact-card">
            <div className="mamochi-contact-card__icon">
              <FaStore aria-hidden="true" />
            </div>
            <h5>Tienda Virtual / Envíos a todo el País</h5>
            <p>Realizamos entregas y envíos seguros a todo Costa Rica.</p>
          </div>
        </div>
      </div>

      <footer className="mamochi-footer">
        <span className="mamochi-footer__brand">Mamochi - Hecho con amor</span>
        <p>© 2026 Mamochi. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

/* ============================================================================
   PROYECTO REAL 3: SISTEMA BIBLIOTECA PÚBLICA (Spring Boot 4 + Thymeleaf + MySQL)
   Réplica 1:1 de tienda/SistemaBiblioteca (estilos.css + creaTablas.sql + plantillas)
   ============================================================================ */
const BIBLIO_I18N = {
  es: {
    brand: 'Biblioteca Pública',
    inicio: 'Inicio',
    catalogo: 'Catálogo',
    misPrestamos: 'Mis préstamos',
    gestion: 'Gestión',
    carnet: 'Mi cuenta',
    staffLabel: 'Módulo Bibliotecario:',
    panel: 'Panel',
    circulacion: 'Circulación y Préstamos',
    inventario: 'Inventario Libros',
    consultas: 'Consultas',
    heroBadge: 'Catálogo Bibliográfico Público',
    heroTitle: 'Encuentra tu próxima lectura',
    heroSub:
      'Explora nuestra colección literaria, científica e histórica. Consulta disponibilidad en tiempo real y reserva tu ejemplar en línea.',
    searchPlaceholder: 'Buscar por título, autor o ISBN...',
    searchBtn: 'Buscar',
    statTitulos: 'Títulos en catálogo',
    statEjemplares: 'Ejemplares disponibles',
    statNote: 'Préstamo garantizado por 14 días • Renovable en línea hasta 2 veces',
    featuredTitle: 'Obras Destacadas',
    exploreGenre: 'Explorar por Género',
    verTodo: 'Ver catálogo completo',
  },
  en: {
    brand: 'Public Library',
    inicio: 'Home',
    catalogo: 'Catalog',
    misPrestamos: 'My Loans',
    gestion: 'Management',
    carnet: 'My Account',
    staffLabel: 'Librarian Module:',
    panel: 'Dashboard',
    circulacion: 'Circulation & Loans',
    inventario: 'Book Inventory',
    consultas: 'Stock Queries',
    heroBadge: 'Public Bibliographic Catalog',
    heroTitle: 'Find your next great read',
    heroSub:
      'Explore our literary, scientific, and historical collection. Check real-time availability and reserve your copy online.',
    searchPlaceholder: 'Search by title, author, or ISBN...',
    searchBtn: 'Search',
    statTitulos: 'Titles in catalog',
    statEjemplares: 'Available copies',
    statNote: '14-day guaranteed loan • Renewable online up to 2 times',
    featuredTitle: 'Featured Works',
    exploreGenre: 'Browse by Genre',
    verTodo: 'View full catalog',
  },
  fr: {
    brand: 'Bibliothèque Publique',
    inicio: 'Accueil',
    catalogo: 'Catalogue',
    misPrestamos: 'Mes Emprunts',
    gestion: 'Gestion',
    carnet: 'Mon Compte',
    staffLabel: 'Module Bibliothécaire:',
    panel: 'Panneau',
    circulacion: 'Circulation & Prêts',
    inventario: 'Inventaire Livres',
    consultas: 'Recherches',
    heroBadge: 'Catalogue Bibliographique Public',
    heroTitle: 'Trouvez votre prochaine lecture',
    heroSub:
      'Explorez notre collection littéraire, scientifique et historique. Consultez la disponibilité en temps réel et réservez en ligne.',
    searchPlaceholder: 'Rechercher par titre, auteur ou ISBN...',
    searchBtn: 'Chercher',
    statTitulos: 'Titres au catalogue',
    statEjemplares: 'Exemplaires disponibles',
    statNote: 'Prêt garanti de 14 jours • Renouvelable en ligne jusqu’à 2 fois',
    featuredTitle: 'Œuvres à la Une',
    exploreGenre: 'Explorer par Genre',
    verTodo: 'Voir tout le catalogue',
  },
  pt: {
    brand: 'Biblioteca Pública',
    inicio: 'Início',
    catalogo: 'Catálogo',
    misPrestamos: 'Meus Empréstimos',
    gestion: 'Gestão',
    carnet: 'Minha Conta',
    staffLabel: 'Módulo Bibliotecário:',
    panel: 'Painel',
    circulacion: 'Circulação e Empréstimos',
    inventario: 'Inventário Livros',
    consultas: 'Consultas',
    heroBadge: 'Catálogo Bibliográfico Público',
    heroTitle: 'Encontre sua próxima leitura',
    heroSub:
      'Explore nossa coleção literária, científica e histórica. Consulte a disponibilidade em tempo real e reserve seu exemplar online.',
    searchPlaceholder: 'Buscar por título, autor ou ISBN...',
    searchBtn: 'Buscar',
    statTitulos: 'Títulos no catálogo',
    statEjemplares: 'Exemplares disponíveis',
    statNote: 'Empréstimo garantido por 14 dias • Renovável online até 2 vezes',
    featuredTitle: 'Obras em Destaque',
    exploreGenre: 'Explorar por Gênero',
    verTodo: 'Ver catálogo completo',
  },
};

const BIBLIO_GENEROS = [
  { id: 1, descripcion: 'Novela Contemporánea', activo: true },
  { id: 2, descripcion: 'Ciencia y Divulgación', activo: true },
  { id: 3, descripcion: 'Historia Universal', activo: true },
  { id: 4, descripcion: 'Literatura Clásica', activo: true },
  { id: 5, descripcion: 'Filosofía y Ensayo', activo: true },
];

const INITIAL_BIBLIO_LIBROS = [
  {
    id: 1,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    isbn: '978-0307474728',
    editorial: 'Editorial Sudamericana',
    anioPublicacion: 1967,
    paginas: 496,
    idGenero: 1,
    genero: 'Novela Contemporánea',
    sinopsis:
      'La historia épica de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.',
    ejemplaresTotales: 5,
    ejemplaresDisponibles: 4,
    portadaUrl: 'https://covers.openlibrary.org/b/isbn/9780307474728-L.jpg',
    destacado: true,
    activo: true,
  },
  {
    id: 2,
    titulo: 'El amor en los tiempos del cólera',
    autor: 'Gabriel García Márquez',
    isbn: '978-0307387264',
    editorial: 'Editorial Oveja Negra',
    anioPublicacion: 1985,
    paginas: 368,
    idGenero: 1,
    genero: 'Novela Contemporánea',
    sinopsis:
      'Crónica de un amor paciente entre Florentino Ariza y Fermina Daza que perdura por más de cincuenta años.',
    ejemplaresTotales: 3,
    ejemplaresDisponibles: 3,
    portadaUrl: 'https://covers.openlibrary.org/b/isbn/9780307387264-L.jpg',
    destacado: false,
    activo: true,
  },
  {
    id: 3,
    titulo: 'Cosmos',
    autor: 'Carl Sagan',
    isbn: '978-0345539434',
    editorial: 'Planeta',
    anioPublicacion: 1980,
    paginas: 396,
    idGenero: 2,
    genero: 'Ciencia y Divulgación',
    sinopsis:
      'Un viaje fascinante por la evolución del universo, la ciencia y la civilización humana.',
    ejemplaresTotales: 4,
    ejemplaresDisponibles: 3,
    portadaUrl: 'https://covers.openlibrary.org/b/isbn/9780345539434-L.jpg',
    destacado: true,
    activo: true,
  },
  {
    id: 4,
    titulo: 'Sapiens: De animales a dioses',
    autor: 'Yuval Noah Harari',
    isbn: '978-8499926223',
    editorial: 'Debate',
    anioPublicacion: 2014,
    paginas: 496,
    idGenero: 3,
    genero: 'Historia Universal',
    sinopsis:
      'Breve historia de la humanidad desde la aparición del Homo sapiens hasta las revoluciones modernas.',
    ejemplaresTotales: 6,
    ejemplaresDisponibles: 5,
    portadaUrl: 'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg',
    destacado: true,
    activo: true,
  },
  {
    id: 5,
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    isbn: '978-8420412146',
    editorial: 'Alfaguara',
    anioPublicacion: 1605,
    paginas: 1248,
    idGenero: 4,
    genero: 'Literatura Clásica',
    sinopsis:
      'Las aventuras del ingenioso hidalgo Alonso Quijano y su fiel escudero Sancho Panza.',
    ejemplaresTotales: 5,
    ejemplaresDisponibles: 5,
    portadaUrl: 'https://covers.openlibrary.org/b/isbn/9788420412146-L.jpg',
    destacado: true,
    activo: true,
  },
  {
    id: 6,
    titulo: 'Meditaciones',
    autor: 'Marco Aurelio',
    isbn: '978-8424938697',
    editorial: 'Gredos',
    anioPublicacion: 180,
    paginas: 224,
    idGenero: 5,
    genero: 'Filosofía y Ensayo',
    sinopsis:
      'Reflexiones personales del emperador romano sobre la filosofía estoica, el deber y la virtud.',
    ejemplaresTotales: 4,
    ejemplaresDisponibles: 4,
    portadaUrl: 'https://covers.openlibrary.org/b/isbn/9780140449334-L.jpg',
    destacado: false,
    activo: true,
  },
];

const INITIAL_BIBLIO_PRESTAMOS = [
  {
    id: 1,
    idLibro: 1,
    tituloLibro: 'Cien años de soledad',
    autorLibro: 'Gabriel García Márquez',
    isbnLibro: '978-0307474728',
    lectorNombre: 'Juan Pérez Rodríguez',
    carnet: 'BIB-2026-0001',
    fechaSolicitud: '2026-10-18',
    fechaDevolucionEsperada: '2026-11-01',
    fechaDevolucionReal: null,
    estado: 'ACTIVO',
    renovaciones: 0,
    observaciones: 'Retirado en mostrador central.',
  },
  {
    id: 2,
    idLibro: 3,
    tituloLibro: 'Cosmos',
    autorLibro: 'Carl Sagan',
    isbnLibro: '978-0345539434',
    lectorNombre: 'Juan Pérez Rodríguez',
    carnet: 'BIB-2026-0001',
    fechaSolicitud: '2026-10-25',
    fechaDevolucionEsperada: '2026-11-08',
    fechaDevolucionReal: null,
    estado: 'RESERVADO',
    renovaciones: 0,
    observaciones: 'Reserva realizada desde catálogo web.',
  },
  {
    id: 3,
    idLibro: 4,
    tituloLibro: 'Sapiens: De animales a dioses',
    autorLibro: 'Yuval Noah Harari',
    isbnLibro: '978-8499926223',
    lectorNombre: 'Ana Gómez Solís',
    carnet: 'BIB-2026-0002',
    fechaSolicitud: '2026-10-12',
    fechaDevolucionEsperada: '2026-10-26',
    fechaDevolucionReal: null,
    estado: 'ACTIVO',
    renovaciones: 1,
    observaciones: 'Préstamo renovado en línea.',
  },
];

function addDaysToIso(isoDate, days) {
  const parts = isoDate.split('-').map(Number);
  const d = new Date(parts[0], parts[1] - 1, parts[2] + days);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function BibliotecaRealDemo() {
  const [lang, setLang] = useState('es');
  const [view, setView] = useState('inicio'); // 'inicio' | 'catalogo' | 'detalle' | 'historial' | 'panel' | 'circulacion' | 'inventario' | 'consultas' | 'perfil'
  const [libros, setLibros] = useState(INITIAL_BIBLIO_LIBROS);
  const [prestamos, setPrestamos] = useState(INITIAL_BIBLIO_PRESTAMOS);

  // Catálogo y filtros
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGeneroId, setSelectedGeneroId] = useState('');
  const [selectedBookId, setSelectedBookId] = useState(1);

  // Reserva
  const [fechaRetiro, setFechaRetiro] = useState('2026-10-29');
  const [obsReserva, setObsReserva] = useState('');

  // Mesa de circulación (filtro de estado)
  const [estadoCirculacion, setEstadoCirculacion] = useState('');

  // Consultas de stock (rango de ejemplares)
  const [minStock, setMinStock] = useState(1);
  const [maxStock, setMaxStock] = useState(10);

  // Nuevo libro en inventario
  const [showNewBookModal, setShowNewBookModal] = useState(false);
  const [newBookForm, setNewBookForm] = useState({
    titulo: '',
    autor: '',
    isbn: '',
    editorial: '',
    anioPublicacion: 2024,
    paginas: 320,
    idGenero: 1,
    ejemplaresTotales: 4,
    sinopsis: '',
    destacado: true,
  });

  // Feedback message (como alerta Flash de Spring MVC)
  const [flashMessage, setFlashMessage] = useState(
    'Sesión activa como Juan Pérez (Carnet BIB-2026-0001 · Roles: Lector y Bibliotecario).'
  );

  const t = BIBLIO_I18N[lang] || BIBLIO_I18N.es;

  const totalTitulos = libros.filter((l) => l.activo).length;
  const totalEjemplaresDisp = libros
    .filter((l) => l.activo)
    .reduce((acc, l) => acc + l.ejemplaresDisponibles, 0);
  const obrasDestacadas = libros.filter((l) => l.activo && l.destacado).slice(0, 4);

  const filteredCatalog = libros.filter((l) => {
    if (!l.activo) return false;
    const matchesGenre = selectedGeneroId ? l.idGenero === Number(selectedGeneroId) : true;
    const q = searchQuery.trim().toLowerCase();
    const matchesText = q
      ? l.titulo.toLowerCase().includes(q) ||
        l.autor.toLowerCase().includes(q) ||
        l.isbn.toLowerCase().includes(q)
      : true;
    return matchesGenre && matchesText;
  });

  const selectedBook = libros.find((l) => l.id === selectedBookId) || libros[0];

  const misPrestamos = prestamos.filter((p) => p.carnet === 'BIB-2026-0001');
  const misActivosCount = misPrestamos.filter((p) => p.estado === 'ACTIVO').length;
  const misReservasCount = misPrestamos.filter((p) => p.estado === 'RESERVADO').length;

  const totalPrestamosActivos = prestamos.filter((p) => p.estado === 'ACTIVO').length;
  const totalReservasPendientes = prestamos.filter((p) => p.estado === 'RESERVADO').length;

  const filteredCirculacion = prestamos.filter((p) =>
    estadoCirculacion ? p.estado === estadoCirculacion : true
  );

  const filteredConsultasStock = libros.filter(
    (l) =>
      l.activo &&
      l.ejemplaresDisponibles >= Number(minStock || 0) &&
      l.ejemplaresDisponibles <= Number(maxStock || 99)
  );

  const handleOpenFicha = (libroId) => {
    setSelectedBookId(libroId);
    setView('detalle');
  };

  const handleConfirmarReserva = (e) => {
    e.preventDefault();
    if (!selectedBook || selectedBook.ejemplaresDisponibles <= 0) {
      setFlashMessage('⚠️ No hay ejemplares disponibles para reservar esta obra.');
      return;
    }

    const devolucion = addDaysToIso(fechaRetiro, 14);
    const nuevoPrestamo = {
      id: prestamos.length + 1,
      idLibro: selectedBook.id,
      tituloLibro: selectedBook.titulo,
      autorLibro: selectedBook.autor,
      isbnLibro: selectedBook.isbn,
      lectorNombre: 'Juan Pérez Rodríguez',
      carnet: 'BIB-2026-0001',
      fechaSolicitud: fechaRetiro,
      fechaDevolucionEsperada: devolucion,
      fechaDevolucionReal: null,
      estado: 'RESERVADO',
      renovaciones: 0,
      observaciones: obsReserva.trim() || 'Reserva en línea desde el catálogo.',
    };

    setPrestamos((prev) => [nuevoPrestamo, ...prev]);
    setLibros((prev) =>
      prev.map((l) =>
        l.id === selectedBook.id
          ? { ...l, ejemplaresDisponibles: Math.max(0, l.ejemplaresDisponibles - 1) }
          : l
      )
    );
    setObsReserva('');
    setFlashMessage(
      `✅ Reserva #${nuevoPrestamo.id} confirmada para "${selectedBook.titulo}". Devolución prevista: ${devolucion}.`
    );
    setView('historial');
  };

  const handleRenovarPrestamo = (prestamoId) => {
    setPrestamos((prev) =>
      prev.map((p) => {
        if (p.id !== prestamoId || p.estado !== 'ACTIVO' || p.renovaciones >= 2) return p;
        const nuevaFecha = addDaysToIso(p.fechaDevolucionEsperada, 14);
        setFlashMessage(
          `🔄 Préstamo de "${p.tituloLibro}" renovado (+14 días). Nueva fecha de devolución: ${nuevaFecha}.`
        );
        return {
          ...p,
          renovaciones: p.renovaciones + 1,
          fechaDevolucionEsperada: nuevaFecha,
        };
      })
    );
  };

  const handleCancelarReserva = (prestamo) => {
    setPrestamos((prev) =>
      prev.map((p) => (p.id === prestamo.id ? { ...p, estado: 'CANCELADO' } : p))
    );
    setLibros((prev) =>
      prev.map((l) =>
        l.id === prestamo.idLibro
          ? {
              ...l,
              ejemplaresDisponibles: Math.min(l.ejemplaresTotales, l.ejemplaresDisponibles + 1),
            }
          : l
      )
    );
    setFlashMessage(
      `↩ Reserva de "${prestamo.tituloLibro}" cancelada. El ejemplar fue reintegrado al catálogo.`
    );
  };

  const handleEntregarMostrador = (prestamo) => {
    setPrestamos((prev) =>
      prev.map((p) =>
        p.id === prestamo.id
          ? {
              ...p,
              estado: 'ACTIVO',
              observaciones: 'Entregado en mostrador de circulación.',
            }
          : p
      )
    );
    setFlashMessage(
      `📚 Ejemplar de "${prestamo.tituloLibro}" entregado a ${prestamo.lectorNombre} (Estado: ACTIVO).`
    );
  };

  const handleRecibirDevolucion = (prestamo) => {
    setPrestamos((prev) =>
      prev.map((p) =>
        p.id === prestamo.id
          ? {
              ...p,
              estado: 'FINALIZADO',
              fechaDevolucionReal: '2026-10-29',
            }
          : p
      )
    );
    setLibros((prev) =>
      prev.map((l) =>
        l.id === prestamo.idLibro
          ? {
              ...l,
              ejemplaresDisponibles: Math.min(l.ejemplaresTotales, l.ejemplaresDisponibles + 1),
            }
          : l
      )
    );
    setFlashMessage(
      `✅ Devolución recibida de "${prestamo.tituloLibro}". Stock disponible incrementado (+1).`
    );
  };

  const handleCreateBook = (e) => {
    e.preventDefault();
    if (!newBookForm.titulo.trim() || !newBookForm.autor.trim()) return;
    const genObj =
      BIBLIO_GENEROS.find((g) => g.id === Number(newBookForm.idGenero)) || BIBLIO_GENEROS[0];
    const total = Math.max(1, Number(newBookForm.ejemplaresTotales) || 1);
    const created = {
      id: libros.length + 1,
      titulo: newBookForm.titulo.trim(),
      autor: newBookForm.autor.trim(),
      isbn: newBookForm.isbn.trim() || '978-9977-00-000-0',
      editorial: newBookForm.editorial.trim() || 'Editorial Universitaria',
      anioPublicacion: Number(newBookForm.anioPublicacion) || 2024,
      paginas: Number(newBookForm.paginas) || 250,
      idGenero: genObj.id,
      genero: genObj.descripcion,
      sinopsis:
        newBookForm.sinopsis.trim() ||
        'Obra incorporada al acervo bibliográfico institucional.',
      ejemplaresTotales: total,
      ejemplaresDisponibles: total,
      portadaUrl: '/demos/biblioteca/favicon-256x256.png',
      destacado: Boolean(newBookForm.destacado),
      activo: true,
    };
    setLibros((prev) => [created, ...prev]);
    setShowNewBookModal(false);
    setNewBookForm({
      titulo: '',
      autor: '',
      isbn: '',
      editorial: '',
      anioPublicacion: 2024,
      paginas: 320,
      idGenero: 1,
      ejemplaresTotales: 4,
      sinopsis: '',
      destacado: true,
    });
    setFlashMessage(`📗 Libro "${created.titulo}" registrado exitosamente en el inventario.`);
  };

  return (
    <div className="biblio-app">
      {/* Navbar Principal Institucional (#14283D - general/fragmentos.html) */}
      <header className="biblio-header">
        <nav className="biblio-navbar">
          <div className="biblio-navbar__inner">
            <button
              type="button"
              className="biblio-brand"
              onClick={() => setView('inicio')}
            >
              <span className="biblio-brand__icon" aria-hidden="true">
                <FaBookOpen />
              </span>
              <span>{t.brand}</span>
            </button>

            <div className="biblio-nav-links">
              <button
                type="button"
                className={`biblio-nav-link ${view === 'inicio' ? 'biblio-nav-link--active' : ''}`}
                onClick={() => setView('inicio')}
              >
                {t.inicio}
              </button>
              <button
                type="button"
                className={`biblio-nav-link ${view === 'catalogo' || view === 'detalle' ? 'biblio-nav-link--active' : ''}`}
                onClick={() => setView('catalogo')}
              >
                {t.catalogo}
              </button>
              <button
                type="button"
                className={`biblio-nav-link ${view === 'historial' ? 'biblio-nav-link--active' : ''}`}
                onClick={() => setView('historial')}
              >
                {t.misPrestamos} ({misActivosCount + misReservasCount})
              </button>
              <button
                type="button"
                className={`biblio-nav-link ${['panel', 'circulacion', 'inventario', 'consultas'].includes(view) ? 'biblio-nav-link--active' : ''}`}
                onClick={() => setView('panel')}
              >
                {t.gestion}
              </button>
              <button
                type="button"
                className={`biblio-nav-link ${view === 'perfil' ? 'biblio-nav-link--active' : ''}`}
                onClick={() => setView('perfil')}
              >
                <FaIdCard aria-hidden="true" /> {t.carnet}
              </button>
            </div>

            {/* Selector de idioma real (messages_es/en/fr/pt.properties) */}
            <div className="biblio-lang-group" role="group" aria-label="Idioma del sistema">
              {['es', 'en', 'fr', 'pt'].map((code) => (
                <button
                  type="button"
                  key={code}
                  className={`biblio-lang-btn ${lang === code ? 'biblio-lang-btn--active' : ''}`}
                  onClick={() => setLang(code)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Franja dorada clásica (.franja-dorada) */}
        <div className="biblio-franja-dorada" />

        {/* Subbarra de personal bibliotecario (.staff-subnav) */}
        <div className="biblio-staff-subnav">
          <div className="biblio-staff-subnav__inner">
            <span className="biblio-staff-subnav__title">{t.staffLabel}</span>
            <button
              type="button"
              className={`biblio-staff-link ${view === 'panel' ? 'biblio-staff-link--active' : ''}`}
              onClick={() => setView('panel')}
            >
              {t.panel}
            </button>
            <button
              type="button"
              className={`biblio-staff-link ${view === 'circulacion' ? 'biblio-staff-link--active' : ''}`}
              onClick={() => setView('circulacion')}
            >
              {t.circulacion}
            </button>
            <button
              type="button"
              className={`biblio-staff-link ${view === 'inventario' ? 'biblio-staff-link--active' : ''}`}
              onClick={() => setView('inventario')}
            >
              {t.inventario}
            </button>
            <button
              type="button"
              className={`biblio-staff-link ${view === 'consultas' ? 'biblio-staff-link--active' : ''}`}
              onClick={() => setView('consultas')}
            >
              {t.consultas}
            </button>
          </div>
        </div>
      </header>

      {/* Flash Alert Banner */}
      {flashMessage && (
        <div className="biblio-flash-alert" role="status" aria-live="polite">
          <span>{flashMessage}</span>
        </div>
      )}

      {/* =========================================================
          VISTA 1: INICIO PÚBLICO (templates/index.html)
          ========================================================= */}
      {view === 'inicio' && (
        <div className="biblio-view">
          <section className="biblio-hero">
            <div className="biblio-hero__grid">
              <div className="biblio-hero__main">
                <span className="biblio-hero__badge">{t.heroBadge}</span>
                <h3 className="biblio-hero__title">{t.heroTitle}</h3>
                <p className="biblio-hero__sub">{t.heroSub}</p>
                <form
                  className="biblio-hero__search"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setView('catalogo');
                  }}
                >
                  <input
                    type="search"
                    className="biblio-input"
                    placeholder={t.searchPlaceholder}
                    aria-label={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="biblio-btn biblio-btn--green">
                    <FaSearch aria-hidden="true" /> {t.searchBtn}
                  </button>
                </form>
              </div>

              <div className="biblio-hero__stats-card">
                <div className="biblio-hero__stats-row">
                  <div>
                    <strong className="biblio-hero__stat-num">{totalTitulos}</strong>
                    <span className="biblio-hero__stat-label">{t.statTitulos}</span>
                  </div>
                  <div className="biblio-hero__stat-divider" />
                  <div>
                    <strong className="biblio-hero__stat-num">{totalEjemplaresDisp}</strong>
                    <span className="biblio-hero__stat-label">{t.statEjemplares}</span>
                  </div>
                </div>
                <p className="biblio-hero__stat-note">{t.statNote}</p>
              </div>
            </div>
          </section>

          <div className="biblio-container">
            {/* Explorar por Género */}
            <div className="biblio-genres-strip">
              <span className="biblio-genres-strip__label">{t.exploreGenre}:</span>
              <div className="biblio-genres-strip__pills">
                {BIBLIO_GENEROS.map((g) => (
                  <button
                    type="button"
                    key={g.id}
                    className="biblio-genre-pill"
                    onClick={() => {
                      setSelectedGeneroId(String(g.id));
                      setView('catalogo');
                    }}
                  >
                    {g.descripcion}
                  </button>
                ))}
              </div>
            </div>

            {/* Obras Destacadas */}
            <div className="biblio-section-head">
              <div>
                <h4 className="biblio-section-title">{t.featuredTitle}</h4>
              </div>
              <button
                type="button"
                className="biblio-btn biblio-btn--outline"
                onClick={() => {
                  setSelectedGeneroId('');
                  setSearchQuery('');
                  setView('catalogo');
                }}
              >
                {t.verTodo} →
              </button>
            </div>

            <div className="biblio-books-grid">
              {obrasDestacadas.map((libro) => (
                <article key={libro.id} className="biblio-book-card">
                  <div className="biblio-book-cover-frame">
                    <img
                      src={libro.portadaUrl}
                      alt={libro.titulo}
                      className="biblio-portada-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="biblio-book-card__body">
                    <span className="biblio-badge-genero">{libro.genero}</span>
                    <h5 className="biblio-book-card__title">{libro.titulo}</h5>
                    <p className="biblio-book-card__author">{libro.autor}</p>
                    <p className="biblio-book-card__meta">
                      {libro.editorial} · {libro.anioPublicacion}
                    </p>
                    <div className="biblio-book-card__footer">
                      {libro.ejemplaresDisponibles > 0 ? (
                        <span className="biblio-badge-disponible">
                          {libro.ejemplaresDisponibles} disp.
                        </span>
                      ) : (
                        <span className="biblio-badge-agotado">Agotado</span>
                      )}
                      <div className="biblio-book-card__actions">
                        <button
                          type="button"
                          className="biblio-btn biblio-btn--primary biblio-btn--sm"
                          onClick={() => handleOpenFicha(libro.id)}
                        >
                          Ver ficha
                        </button>
                        {libro.ejemplaresDisponibles > 0 && (
                          <button
                            type="button"
                            className="biblio-btn biblio-btn--green biblio-btn--sm"
                            onClick={() => handleOpenFicha(libro.id)}
                            title="Reservar ejemplar"
                            aria-label={`Reservar ${libro.titulo}`}
                          >
                            <FaBookmark aria-hidden="true" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Servicios al Lector */}
            <div className="biblio-services-grid">
              <div className="biblio-service-card">
                <h5>1. Catálogo Bibliográfico</h5>
                <p>
                  Consulta nuestra colección por título, autor, código ISBN o categoría literaria.
                </p>
                <button
                  type="button"
                  className="biblio-btn biblio-btn--primary biblio-btn--sm"
                  onClick={() => setView('catalogo')}
                >
                  Explorar catálogo
                </button>
              </div>
              <div className="biblio-service-card">
                <h5>2. Reserva y Renovación en Línea</h5>
                <p>
                  Reserva ejemplares disponibles por 14 días y renueva tus préstamos activos hasta 2
                  veces.
                </p>
                <button
                  type="button"
                  className="biblio-btn biblio-btn--green biblio-btn--sm"
                  onClick={() => setView('historial')}
                >
                  Mis préstamos y reservas
                </button>
              </div>
              <div className="biblio-service-card">
                <h5>3. Mesa de Circulación</h5>
                <p>
                  Módulo para personal bibliotecario: entregas en mostrador, devoluciones y control
                  de stock.
                </p>
                <button
                  type="button"
                  className="biblio-btn biblio-btn--outline biblio-btn--sm"
                  onClick={() => setView('circulacion')}
                >
                  Abrir Mesa de Circulación
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 2: CATÁLOGO BIBLIOGRÁFICO (templates/catalogo.html)
          ========================================================= */}
      {view === 'catalogo' && (
        <div className="biblio-container">
          <div className="biblio-section-head">
            <div>
              <h4 className="biblio-section-title">Catálogo Bibliográfico</h4>
              <p className="biblio-text-muted">
                Explora todas las obras disponibles para préstamo y reserva en línea
              </p>
            </div>
            <span className="biblio-count-pill">
              Mostrando <strong>{filteredCatalog.length}</strong> obras
            </span>
          </div>

          <div className="biblio-filter-card">
            <div className="biblio-filter-grid">
              <div>
                <label className="biblio-label" htmlFor="bib-q">
                  Título, autor o ISBN
                </label>
                <input
                  id="bib-q"
                  type="search"
                  className="biblio-input"
                  placeholder="Ej: García Márquez, Cosmos, 978..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div>
                <label className="biblio-label" htmlFor="bib-gen">
                  Género literario
                </label>
                <select
                  id="bib-gen"
                  className="biblio-select"
                  value={selectedGeneroId}
                  onChange={(e) => setSelectedGeneroId(e.target.value)}
                >
                  <option value="">Todos los géneros</option>
                  {BIBLIO_GENEROS.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.descripcion}
                    </option>
                  ))}
                </select>
              </div>
              <div className="biblio-filter-actions">
                <button
                  type="button"
                  className="biblio-btn biblio-btn--outline"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedGeneroId('');
                  }}
                >
                  Limpiar filtros
                </button>
              </div>
            </div>
          </div>

          <div className="biblio-books-grid">
            {filteredCatalog.map((libro) => (
              <article key={libro.id} className="biblio-book-card">
                <div className="biblio-book-cover-frame">
                  <img
                    src={libro.portadaUrl}
                    alt={libro.titulo}
                    className="biblio-portada-img"
                    loading="lazy"
                  />
                </div>
                <div className="biblio-book-card__body">
                  <span className="biblio-badge-genero">{libro.genero}</span>
                  <h5 className="biblio-book-card__title">{libro.titulo}</h5>
                  <p className="biblio-book-card__author">{libro.autor}</p>
                  <p className="biblio-book-card__meta">ISBN: {libro.isbn}</p>
                  <div className="biblio-book-card__footer">
                    {libro.ejemplaresDisponibles > 0 ? (
                      <span className="biblio-badge-disponible">
                        {libro.ejemplaresDisponibles} de {libro.ejemplaresTotales} disp.
                      </span>
                    ) : (
                      <span className="biblio-badge-agotado">Sin stock</span>
                    )}
                    <div className="biblio-book-card__actions">
                      <button
                        type="button"
                        className="biblio-btn biblio-btn--primary biblio-btn--sm"
                        onClick={() => handleOpenFicha(libro.id)}
                      >
                        Ver ficha / Reservar
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 3: FICHA BIBLIOGRÁFICA Y RESERVA (libro/detalle.html + prestamo/reservar.html)
          ========================================================= */}
      {view === 'detalle' && selectedBook && (
        <div className="biblio-container">
          <div className="biblio-breadcrumb">
            <button
              type="button"
              className="biblio-btn biblio-btn--outline biblio-btn--sm"
              onClick={() => setView('catalogo')}
            >
              ← Volver al Catálogo
            </button>
          </div>

          <div className="biblio-ficha-grid">
            {/* Ficha Bibliográfica */}
            <div className="biblio-ficha-card">
              <div className="biblio-ficha-card__top">
                <div className="biblio-ficha-cover">
                  <img
                    src={selectedBook.portadaUrl}
                    alt={selectedBook.titulo}
                    className="biblio-portada-img"
                  />
                </div>
                <div className="biblio-ficha-info">
                  <span className="biblio-badge-genero">{selectedBook.genero}</span>
                  <h4 className="biblio-ficha-title">{selectedBook.titulo}</h4>
                  <p className="biblio-ficha-author">Por {selectedBook.autor}</p>
                  <p className="biblio-ficha-sinopsis">{selectedBook.sinopsis}</p>

                  <div className="biblio-specs-grid">
                    <div>
                      <small>ISBN</small>
                      <strong>{selectedBook.isbn}</strong>
                    </div>
                    <div>
                      <small>Editorial</small>
                      <strong>{selectedBook.editorial}</strong>
                    </div>
                    <div>
                      <small>Año de Publicación</small>
                      <strong>{selectedBook.anioPublicacion}</strong>
                    </div>
                    <div>
                      <small>Extensión</small>
                      <strong>{selectedBook.paginas} páginas</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Solicitud de Reserva Bibliográfica */}
            <form className="biblio-reserva-card" onSubmit={handleConfirmarReserva}>
              <div className="biblio-reserva-card__header">
                <h5>
                  <FaBookmark aria-hidden="true" /> Solicitud de Reserva Bibliográfica
                </h5>
              </div>
              <div className="biblio-reserva-card__body">
                <div className="biblio-availability-box">
                  <span>Disponibilidad en estantería:</span>
                  {selectedBook.ejemplaresDisponibles > 0 ? (
                    <span className="biblio-badge-disponible">
                      {selectedBook.ejemplaresDisponibles} de {selectedBook.ejemplaresTotales}{' '}
                      ejemplares
                    </span>
                  ) : (
                    <span className="biblio-badge-agotado">Agotado temporalmente</span>
                  )}
                </div>

                <label className="biblio-label" htmlFor="res-fecha">
                  Fecha de Retiro en Biblioteca
                </label>
                <input
                  id="res-fecha"
                  type="date"
                  className="biblio-input"
                  value={fechaRetiro}
                  onChange={(e) => setFechaRetiro(e.target.value)}
                  required
                />

                <label className="biblio-label" htmlFor="res-obs">
                  Observaciones (Opcional)
                </label>
                <input
                  id="res-obs"
                  type="text"
                  className="biblio-input"
                  placeholder="Ej: Retiro en horario de la tarde..."
                  value={obsReserva}
                  onChange={(e) => setObsReserva(e.target.value)}
                />

                <div className="biblio-conditions-box">
                  <strong>Condiciones del préstamo institucional:</strong>
                  <ul>
                    <li>Plazo estándar de préstamo: 14 días naturales.</li>
                    <li>Devolución prevista: {addDaysToIso(fechaRetiro, 14)}.</li>
                    <li>Renovable en línea hasta 2 veces si no existe mora.</li>
                  </ul>
                </div>

                <button
                  type="submit"
                  className="biblio-btn biblio-btn--green biblio-w-full"
                  disabled={selectedBook.ejemplaresDisponibles <= 0}
                >
                  Confirmar Reserva de Ejemplar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 4: MIS PRÉSTAMOS Y RESERVAS (prestamo/historial.html)
          ========================================================= */}
      {view === 'historial' && (
        <div className="biblio-container">
          <div className="biblio-section-head">
            <div>
              <h4 className="biblio-section-title">Mis Préstamos y Reservas</h4>
              <p className="biblio-text-muted">
                Lector: <strong>Juan Pérez Rodríguez</strong> · Carnet{' '}
                <code>BIB-2026-0001</code>
              </p>
            </div>
            <div className="biblio-head-badges">
              <span className="biblio-badge-disponible">Activos: {misActivosCount}</span>
              <span className="biblio-badge-reservado">Reservas: {misReservasCount}</span>
              <button
                type="button"
                className="biblio-btn biblio-btn--primary biblio-btn--sm"
                onClick={() => setView('catalogo')}
              >
                + Buscar nuevo libro
              </button>
            </div>
          </div>

          <div
            tabIndex={0}
            role="region"
            aria-label="Tabla de mis préstamos y reservas"
            className="biblio-table-wrap"
          >
            <table className="biblio-table">
              <thead>
                <tr>
                  <th>Obra</th>
                  <th>Retiro</th>
                  <th>Devolución Prevista</th>
                  <th>Renovaciones</th>
                  <th>Estado</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {misPrestamos.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <strong>{p.tituloLibro}</strong>
                      <div className="biblio-table-sub">{p.autorLibro}</div>
                    </td>
                    <td>{p.fechaSolicitud}</td>
                    <td>
                      <strong>{p.fechaDevolucionEsperada}</strong>
                    </td>
                    <td>{p.renovaciones} / 2</td>
                    <td>
                      <span className={`biblio-state-badge biblio-state-badge--${p.estado.toLowerCase()}`}>
                        {p.estado}
                      </span>
                    </td>
                    <td>
                      <div className="biblio-table-actions">
                        {p.estado === 'ACTIVO' && p.renovaciones < 2 && (
                          <button
                            type="button"
                            className="biblio-btn biblio-btn--primary biblio-btn--sm"
                            onClick={() => handleRenovarPrestamo(p.id)}
                          >
                            <FaSyncAlt aria-hidden="true" /> Renovar (+14d)
                          </button>
                        )}
                        {p.estado === 'RESERVADO' && (
                          <button
                            type="button"
                            className="biblio-btn biblio-btn--danger biblio-btn--sm"
                            onClick={() => handleCancelarReserva(p)}
                          >
                            Cancelar reserva
                          </button>
                        )}
                        {(p.estado === 'FINALIZADO' || p.estado === 'CANCELADO' || (p.estado === 'ACTIVO' && p.renovaciones >= 2)) && (
                          <span className="biblio-text-muted">—</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 5: PANEL DE GESTIÓN BIBLIOTECARIA (admin/panel.html)
          ========================================================= */}
      {view === 'panel' && (
        <div className="biblio-container">
          <div className="biblio-section-head">
            <div>
              <h4 className="biblio-section-title">Panel de Gestión Bibliotecaria</h4>
              <p className="biblio-text-muted">
                Resumen operativo de catálogo, circulación y préstamos activos
              </p>
            </div>
          </div>

          <div className="biblio-stats-grid">
            <div className="biblio-stat-card">
              <span className="biblio-stat-card__label">Títulos activos</span>
              <strong className="biblio-stat-card__num">{totalTitulos}</strong>
            </div>
            <div className="biblio-stat-card">
              <span className="biblio-stat-card__label">Ejemplares disponibles</span>
              <strong className="biblio-stat-card__num">{totalEjemplaresDisp}</strong>
            </div>
            <div className="biblio-stat-card biblio-stat-card--green">
              <span className="biblio-stat-card__label">Préstamos en curso</span>
              <strong className="biblio-stat-card__num">{totalPrestamosActivos}</strong>
            </div>
            <div className="biblio-stat-card biblio-stat-card--gold">
              <span className="biblio-stat-card__label">Reservas por entregar</span>
              <strong className="biblio-stat-card__num">{totalReservasPendientes}</strong>
            </div>
          </div>

          <div className="biblio-services-grid">
            <div className="biblio-service-card">
              <h5>Mesa de Circulación y Préstamos</h5>
              <p>
                Gestiona la entrega de libros reservados en mostrador y registra la recepción de
                devoluciones con reintegro automático de stock.
              </p>
              <button
                type="button"
                className="biblio-btn biblio-btn--primary biblio-btn--sm"
                onClick={() => setView('circulacion')}
              >
                Ir a Circulación
              </button>
            </div>
            <div className="biblio-service-card">
              <h5>Inventario de Libros</h5>
              <p>
                Administra las fichas bibliográficas, códigos ISBN, stock total y ejemplares
                destacados en portada.
              </p>
              <button
                type="button"
                className="biblio-btn biblio-btn--green biblio-btn--sm"
                onClick={() => setView('inventario')}
              >
                Administrar Libros
              </button>
            </div>
            <div className="biblio-service-card">
              <h5>Consultas de Inventario</h5>
              <p>
                Reportes y filtrado avanzado de obras por disponibilidad de ejemplares y género
                literario (Consultas JPQL / JPA).
              </p>
              <button
                type="button"
                className="biblio-btn biblio-btn--outline biblio-btn--sm"
                onClick={() => setView('consultas')}
              >
                Abrir Consultas
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 6: MESA DE CIRCULACIÓN (prestamo/listado.html)
          ========================================================= */}
      {view === 'circulacion' && (
        <div className="biblio-container">
          <div className="biblio-section-head">
            <div>
              <h4 className="biblio-section-title">Mesa de Circulación y Préstamos</h4>
              <p className="biblio-text-muted">
                Control de reservas pendientes de retiro, préstamos activos y devoluciones
              </p>
            </div>
          </div>

          <div className="biblio-filter-pills">
            {[
              { val: '', label: 'Todos los registros' },
              { val: 'RESERVADO', label: 'Reservas Pendientes' },
              { val: 'ACTIVO', label: 'En Préstamo Activo' },
              { val: 'FINALIZADO', label: 'Finalizados' },
            ].map((tab) => (
              <button
                type="button"
                key={tab.label}
                className={`biblio-pill-btn ${estadoCirculacion === tab.val ? 'biblio-pill-btn--active' : ''}`}
                onClick={() => setEstadoCirculacion(tab.val)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            tabIndex={0}
            role="region"
            aria-label="Tabla de mesa de circulación"
            className="biblio-table-wrap"
          >
            <table className="biblio-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Lector / Carnet</th>
                  <th>Obra / ISBN</th>
                  <th>Retiro</th>
                  <th>Vencimiento</th>
                  <th>Estado</th>
                  <th>Acciones en Mostrador</th>
                </tr>
              </thead>
              <tbody>
                {filteredCirculacion.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>
                      <strong>{p.lectorNombre}</strong>
                      <div className="biblio-table-sub">{p.carnet}</div>
                    </td>
                    <td>
                      <strong>{p.tituloLibro}</strong>
                      <div className="biblio-table-sub">ISBN: {p.isbnLibro}</div>
                    </td>
                    <td>{p.fechaSolicitud}</td>
                    <td>{p.fechaDevolucionEsperada}</td>
                    <td>
                      <span className={`biblio-state-badge biblio-state-badge--${p.estado.toLowerCase()}`}>
                        {p.estado}
                      </span>
                    </td>
                    <td>
                      <div className="biblio-table-actions">
                        {p.estado === 'RESERVADO' && (
                          <>
                            <button
                              type="button"
                              className="biblio-btn biblio-btn--green biblio-btn--sm"
                              onClick={() => handleEntregarMostrador(p)}
                            >
                              Entregar libro
                            </button>
                            <button
                              type="button"
                              className="biblio-btn biblio-btn--danger biblio-btn--sm"
                              onClick={() => handleCancelarReserva(p)}
                            >
                              Cancelar
                            </button>
                          </>
                        )}
                        {p.estado === 'ACTIVO' && (
                          <button
                            type="button"
                            className="biblio-btn biblio-btn--primary biblio-btn--sm"
                            onClick={() => handleRecibirDevolucion(p)}
                          >
                            <FaUndo aria-hidden="true" /> Recibir devolución
                          </button>
                        )}
                        {(p.estado === 'FINALIZADO' || p.estado === 'CANCELADO') && (
                          <span className="biblio-text-muted">
                            {p.fechaDevolucionReal ? `Devuelto ${p.fechaDevolucionReal}` : 'Cerrado'}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 7: INVENTARIO DE LIBROS (libro/listado.html)
          ========================================================= */}
      {view === 'inventario' && (
        <div className="biblio-container">
          <div className="biblio-section-head">
            <div>
              <h4 className="biblio-section-title">Inventario Bibliográfico</h4>
              <p className="biblio-text-muted">
                Administración del catálogo de libros y control de ejemplares
              </p>
            </div>
            <button
              type="button"
              className="biblio-btn biblio-btn--green"
              onClick={() => setShowNewBookModal((prev) => !prev)}
            >
              <FaPlus aria-hidden="true" /> Registrar Nuevo Libro
            </button>
          </div>

          {showNewBookModal && (
            <form className="biblio-filter-card" onSubmit={handleCreateBook}>
              <h5 className="biblio-form-title">Registrar Nueva Obra en Catálogo</h5>
              <div className="biblio-filter-grid">
                <div>
                  <label className="biblio-label" htmlFor="nb-titulo">
                    Título de la Obra *
                  </label>
                  <input
                    id="nb-titulo"
                    type="text"
                    className="biblio-input"
                    placeholder="Ej: Rayuela"
                    value={newBookForm.titulo}
                    onChange={(e) => setNewBookForm({ ...newBookForm, titulo: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="biblio-label" htmlFor="nb-autor">
                    Autor(a) *
                  </label>
                  <input
                    id="nb-autor"
                    type="text"
                    className="biblio-input"
                    placeholder="Ej: Julio Cortázar"
                    value={newBookForm.autor}
                    onChange={(e) => setNewBookForm({ ...newBookForm, autor: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="biblio-label" htmlFor="nb-genero">
                    Género Literario
                  </label>
                  <select
                    id="nb-genero"
                    className="biblio-select"
                    value={newBookForm.idGenero}
                    onChange={(e) => setNewBookForm({ ...newBookForm, idGenero: e.target.value })}
                  >
                    {BIBLIO_GENEROS.map((g) => (
                      <option key={g.id} value={g.id}>
                        {g.descripcion}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="biblio-label" htmlFor="nb-isbn">
                    Código ISBN
                  </label>
                  <input
                    id="nb-isbn"
                    type="text"
                    className="biblio-input"
                    placeholder="978-8420431321"
                    value={newBookForm.isbn}
                    onChange={(e) => setNewBookForm({ ...newBookForm, isbn: e.target.value })}
                  />
                </div>
                <div>
                  <label className="biblio-label" htmlFor="nb-stock">
                    Ejemplares Totales
                  </label>
                  <input
                    id="nb-stock"
                    type="number"
                    min="1"
                    className="biblio-input"
                    value={newBookForm.ejemplaresTotales}
                    onChange={(e) =>
                      setNewBookForm({ ...newBookForm, ejemplaresTotales: e.target.value })
                    }
                  />
                </div>
                <div className="biblio-filter-actions">
                  <button type="submit" className="biblio-btn biblio-btn--green">
                    Guardar Obra
                  </button>
                  <button
                    type="button"
                    className="biblio-btn biblio-btn--outline"
                    onClick={() => setShowNewBookModal(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          )}

          <div
            tabIndex={0}
            role="region"
            aria-label="Tabla de inventario de libros"
            className="biblio-table-wrap"
          >
            <table className="biblio-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título / Editorial</th>
                  <th>Autor</th>
                  <th>Género</th>
                  <th>ISBN</th>
                  <th>Stock (Disp / Total)</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {libros
                  .filter((l) => l.activo)
                  .map((l) => (
                    <tr key={l.id}>
                      <td>{l.id}</td>
                      <td>
                        <strong>{l.titulo}</strong>
                        <div className="biblio-table-sub">
                          {l.editorial} ({l.anioPublicacion})
                        </div>
                      </td>
                      <td>{l.autor}</td>
                      <td>
                        <span className="biblio-badge-genero">{l.genero}</span>
                      </td>
                      <td>
                        <code>{l.isbn}</code>
                      </td>
                      <td>
                        <span className="biblio-badge-disponible">
                          {l.ejemplaresDisponibles} / {l.ejemplaresTotales}
                        </span>
                      </td>
                      <td>
                        <div className="biblio-table-actions">
                          <button
                            type="button"
                            className="biblio-btn biblio-btn--primary biblio-btn--sm"
                            onClick={() => handleOpenFicha(l.id)}
                          >
                            Ficha
                          </button>
                          <button
                            type="button"
                            className="biblio-btn biblio-btn--danger biblio-btn--sm"
                            onClick={() => {
                              setLibros((prev) =>
                                prev.map((item) =>
                                  item.id === l.id ? { ...item, activo: false } : item
                                )
                              );
                              setFlashMessage(`🗑️ Obra "${l.titulo}" retirada del catálogo activo.`);
                            }}
                            title="Retirar del catálogo"
                            aria-label={`Retirar ${l.titulo}`}
                          >
                            <FaTrash aria-hidden="true" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 8: CONSULTAS DE INVENTARIO (consultas/listado.html)
          ========================================================= */}
      {view === 'consultas' && (
        <div className="biblio-container">
          <div className="biblio-section-head">
            <div>
              <h4 className="biblio-section-title">Consultas Avanzadas de Inventario</h4>
              <p className="biblio-text-muted">
                Filtrado por rango de ejemplares disponibles (Spring Data JPA / JPQL)
              </p>
            </div>
          </div>

          <div className="biblio-filter-card">
            <div className="biblio-filter-grid">
              <div>
                <label className="biblio-label" htmlFor="con-min">
                  Mínimo de ejemplares disponibles
                </label>
                <input
                  id="con-min"
                  type="number"
                  min="0"
                  className="biblio-input"
                  value={minStock}
                  onChange={(e) => setMinStock(e.target.value)}
                />
              </div>
              <div>
                <label className="biblio-label" htmlFor="con-max">
                  Máximo de ejemplares disponibles
                </label>
                <input
                  id="con-max"
                  type="number"
                  min="0"
                  className="biblio-input"
                  value={maxStock}
                  onChange={(e) => setMaxStock(e.target.value)}
                />
              </div>
              <div className="biblio-filter-actions">
                <span className="biblio-count-pill">
                  Resultados en rango: <strong>{filteredConsultasStock.length}</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="biblio-books-grid">
            {filteredConsultasStock.map((libro) => (
              <article key={libro.id} className="biblio-book-card">
                <div className="biblio-book-cover-frame">
                  <img
                    src={libro.portadaUrl}
                    alt={libro.titulo}
                    className="biblio-portada-img"
                    loading="lazy"
                  />
                </div>
                <div className="biblio-book-card__body">
                  <span className="biblio-badge-genero">{libro.genero}</span>
                  <h5 className="biblio-book-card__title">{libro.titulo}</h5>
                  <p className="biblio-book-card__author">{libro.autor}</p>
                  <div className="biblio-book-card__footer">
                    <span className="biblio-badge-disponible">
                      {libro.ejemplaresDisponibles} disp.
                    </span>
                    <button
                      type="button"
                      className="biblio-btn biblio-btn--primary biblio-btn--sm"
                      onClick={() => handleOpenFicha(libro.id)}
                    >
                      Ver ficha
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
          VISTA 9: CARNET DIGITAL Y PERFIL (registro/perfil.html)
          ========================================================= */}
      {view === 'perfil' && (
        <div className="biblio-container">
          <div className="biblio-carnet-card">
            <div className="biblio-carnet-card__header">
              <div>
                <span className="biblio-hero__badge">Carnet Bibliotecario Digital</span>
                <h4>Juan Pérez Rodríguez</h4>
                <p>Usuario Institucional Activo · Cédula 1-1234-5678</p>
              </div>
              <code className="biblio-carnet-code">BIB-2026-0001</code>
            </div>
            <div className="biblio-carnet-card__body">
              <div className="biblio-specs-grid">
                <div>
                  <small>Correo Electrónico</small>
                  <strong>jperez@gmail.com</strong>
                </div>
                <div>
                  <small>Teléfono</small>
                  <strong>8888-1111</strong>
                </div>
                <div>
                  <small>Roles Asignados (Spring Security)</small>
                  <strong>ROLE_USUARIO · ROLE_BIBLIOTECARIO · ROLE_ADMIN</strong>
                </div>
                <div>
                  <small>Política de Préstamo</small>
                  <strong>Hasta 3 obras simultáneas · 14 días</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Institucional (#14283D - general/fragmentos.html) */}
      <footer className="biblio-footer">
        <div className="biblio-footer__inner">
          <div>
            <strong>{t.brand} — Sistema Institucional de Gestión Bibliotecaria</strong>
            <p>
              Desarrollado con Spring Boot 4, Thymeleaf, Spring Security 6 y MySQL · © 2026 Todos
              los derechos reservados.
            </p>
          </div>
          <span className="biblio-footer__badge">v1.0.0 · Java 21 LTS</span>
        </div>
      </footer>
    </div>
  );
}

/* ==========================================
   MAIN SHOWROOM CONTAINER
   ========================================== */
function DemoShowroom({ activeDemoId, onSelectDemo, onRequestQuote }) {
  const [internalDemo, setInternalDemo] = useState('pos');
  const [audienceMode, setAudienceMode] = useState('client'); // 'client' | 'recruiter'
  const [viewportSize, setViewportSize] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'

  // Normalize external IDs ('ecommerce' -> 'mamochi', etc.)
  const normalizedExternal =
    activeDemoId === 'ecommerce'
      ? 'mamochi'
      : activeDemoId === 'pos' || activeDemoId === 'mamochi' || activeDemoId === 'biblioteca'
        ? activeDemoId
        : null;

  const currentDemoId = normalizedExternal || internalDemo;

  const setDemo = (id) => {
    setInternalDemo(id);
    if (onSelectDemo) onSelectDemo(id);
  };

  const currentMeta = DEMO_META.find((d) => d.id === currentDemoId) || DEMO_META[0];

  const handleQuoteClick = () => {
    if (onRequestQuote) {
      onRequestQuote(`Cotización de solución similar a: ${currentMeta.title}`);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="demos" className="showroom section">
      <div className="section-header">
        <span className="section-eyebrow">
          <HiOutlineSparkles aria-hidden="true" /> Demos Interactivas de Mis Proyectos Reales
        </span>
        <h2 className="section-title">
          Prueba Mis <span className="highlight">Proyectos en Vivo</span>
        </h2>
        <p className="section-subtitle">
          Interactúa directamente con mis proyectos reales tal como funcionan en producción:{' '}
          <strong>POS SellControl</strong> (JavaFX + SQLite), <strong>Mamochi</strong> (sitio web
          comercial) y <strong>Biblioteca Pública</strong> (Spring Boot 4 + MySQL).
        </p>
      </div>

      {/* Top Selector Bar: Real Project Tabs + Audience Switcher */}
      <div className="showroom__top-controls">
        <div className="showroom__tabs" role="tablist" aria-label="Seleccionar proyecto real">
          {DEMO_META.map((demo) => (
            <button
              type="button"
              key={demo.id}
              role="tab"
              aria-selected={currentDemoId === demo.id}
              className={`showroom__tab ${currentDemoId === demo.id ? 'showroom__tab--active' : ''}`}
              onClick={() => setDemo(demo.id)}
            >
              <span className="showroom__tab-icon" aria-hidden="true">
                {demo.icon}
              </span>
              <div className="showroom__tab-text">
                <span className="showroom__tab-cat">{demo.category}</span>
                <strong>{demo.title}</strong>
              </div>
            </button>
          ))}
        </div>

        <div className="showroom__mode-switch" role="group" aria-label="Modo de visualización">
          <button
            type="button"
            className={`showroom__mode-btn ${audienceMode === 'client' ? 'showroom__mode-btn--active' : ''}`}
            onClick={() => setAudienceMode('client')}
          >
            <FaBriefcase aria-hidden="true" /> Vista Cliente
          </button>
          <button
            type="button"
            className={`showroom__mode-btn ${audienceMode === 'recruiter' ? 'showroom__mode-btn--active' : ''}`}
            onClick={() => setAudienceMode('recruiter')}
          >
            <FaCode aria-hidden="true" /> Ficha Técnica (Reclutador)
          </button>
        </div>
      </div>

      {/* Context Banner: Adapts to Client vs Recruiter */}
      <motion.div
        key={`${currentMeta.id}-${audienceMode}`}
        className="showroom__context-card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {audienceMode === 'client' ? (
          <div className="showroom__client-banner">
            <div className="showroom__client-info">
              <span className="showroom__banner-tag">
                <FaBolt aria-hidden="true" /> Proyecto Real Desarrollado por Mauricio Vásquez
              </span>
              <h3>{currentMeta.title}</h3>
              <p>{currentMeta.clientPitch}</p>
              <ul className="showroom__deliverables">
                {currentMeta.clientDeliverables.map((item) => (
                  <li key={item}>
                    <FaCheckCircle aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="showroom__client-cta">
              <button type="button" className="btn-accent" onClick={handleQuoteClick}>
                Quiero algo así para mi negocio <FaArrowRight aria-hidden="true" />
              </button>
              {currentMeta.liveUrl && (
                <a
                  href={currentMeta.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline showroom__live-link"
                >
                  <FaExternalLinkAlt aria-hidden="true" /> Abrir mamochi.vercel.app
                </a>
              )}
              <small>Adaptado a tu marca, colores y reglas de negocio</small>
            </div>
          </div>
        ) : (
          <div className="showroom__recruiter-banner">
            <div className="showroom__recruiter-info">
              <span className="showroom__banner-tag showroom__banner-tag--tech">
                <FaCode aria-hidden="true" /> Arquitectura: {currentMeta.recruiterSpecs.architecture}
              </span>
              <h3>Ingeniería detrás de &quot;{currentMeta.title}&quot;</h3>
              <ul className="showroom__tech-points">
                {currentMeta.recruiterSpecs.highlights.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
            <div className="showroom__recruiter-stack">
              <span>Tecnologías del proyecto real:</span>
              <div className="showroom__badges">
                {currentMeta.recruiterSpecs.stack.map((s) => (
                  <span key={s} className="tech-badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Interactive Browser / Application Frame with Device Switcher */}
      <div className="showroom__browser-wrapper">
        <div className="showroom__browser-bar">
          <div className="hero__panel-dots" aria-hidden="true">
            <span className="dot dot--red" />
            <span className="dot dot--amber" />
            <span className="dot dot--green" />
          </div>
          <div className="showroom__url-bar">
            <span className="showroom__live-dot" aria-hidden="true" />
            <code>{currentMeta.urlDisplay}</code>
          </div>
          <div className="showroom__viewport-controls" role="group" aria-label="Tamaño de pantalla">
            {currentDemoId === 'pos' ? (
              <span
                className="showroom__vp-btn showroom__vp-btn--active"
                title="POS SellControl es una aplicación exclusiva de Escritorio"
              >
                <FaDesktop aria-hidden="true" /> <span>Solo Escritorio (App Nativa)</span>
              </span>
            ) : (
              <>
                <button
                  type="button"
                  className={`showroom__vp-btn ${viewportSize === 'desktop' ? 'showroom__vp-btn--active' : ''}`}
                  onClick={() => setViewportSize('desktop')}
                  title="Vista Escritorio (100%)"
                >
                  <FaDesktop aria-hidden="true" /> <span>Escritorio</span>
                </button>
                <button
                  type="button"
                  className={`showroom__vp-btn ${viewportSize === 'tablet' ? 'showroom__vp-btn--active' : ''}`}
                  onClick={() => setViewportSize('tablet')}
                  title="Vista Tablet"
                >
                  <FaTabletAlt aria-hidden="true" /> <span>Tablet</span>
                </button>
                <button
                  type="button"
                  className={`showroom__vp-btn ${viewportSize === 'mobile' ? 'showroom__vp-btn--active' : ''}`}
                  onClick={() => setViewportSize('mobile')}
                  title="Vista Móvil"
                >
                  <FaMobileAlt aria-hidden="true" /> <span>Móvil</span>
                </button>
              </>
            )}
          </div>
        </div>

        <div className={`showroom__stage showroom__stage--${currentDemoId === 'pos' ? 'desktop' : viewportSize}`}>
          {currentDemoId === 'pos' && <PosSellControlDemo />}
          {currentDemoId === 'mamochi' && <MamochiRealDemo />}
          {currentDemoId === 'biblioteca' && <BibliotecaRealDemo />}
        </div>
      </div>
    </section>
  );
}

export default DemoShowroom;
